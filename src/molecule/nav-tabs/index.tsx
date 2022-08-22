import { NavTabWrap, TabContainer } from "./nav-tab";

const NavTab = ({
  selectedTab,
  changeTab = () => {},
}: {
  selectedTab?: string;
  changeTab?: Function;
}) => {
  const tabs = ["Personal Info", "Billing Info", "Confirm Payment"];
  return (
    <NavTabWrap>
      {tabs.map((tab) => (
        <TabContainer
          key={tab}
          isActive={selectedTab === tab}
          className="tab-text-cont"
          onClick={() => changeTab(tab)}
        >
          <span>{tab}</span>
          <div className="tab-line"></div>
        </TabContainer>
      ))}
    </NavTabWrap>
  );
};

export default NavTab;
