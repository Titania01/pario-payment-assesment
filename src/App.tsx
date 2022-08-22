import { FormEvent, useState } from "react";
import { Heading } from "./atoms/Typography";
import NavTab from "./molecule/nav-tabs";
import PurchaseCard from "./molecule/purchase-card";
import BillingInfo from "./organisms/billing-info";
import ConfirmPayment from "./organisms/payment-confirmation";
import PersonalInfo from "./organisms/personal-info";
import FormLayout from "./templates/form-layout";
import PageLayout from "./templates/pages-layout/index";

function App() {
  const [tab, setTab] = useState("Personal Info");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (tab === "Personal Info") setTab("Billing Info");
    if (tab === "Billing Info") setTab("Confirm Payment");
    if (tab === "Confirm Payment") setTab("successful");
    else return;
  };
  return (
    <div>
      <PageLayout>
        {tab !== "successful" && (
          <Heading mg="0 0 3.5rem 0">Complete Your Purchase</Heading>
        )}
        {tab !== "successful" && (
          <NavTab selectedTab={tab} changeTab={setTab} />
        )}
        {tab !== "successful" && (
          <FormLayout onSubmit={handleSubmit}>
            {tab === "Personal Info" && <PersonalInfo />}
            {tab === "Billing Info" && <BillingInfo />}
            {tab === "Confirm Payment" && <ConfirmPayment />}
          </FormLayout>
        )}
        {tab === "successful" && <PurchaseCard />}
      </PageLayout>
    </div>
  );
}

export default App;
