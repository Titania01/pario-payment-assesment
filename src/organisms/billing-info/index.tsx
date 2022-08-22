import { ChangeEvent, useState } from "react";
import Input from "../../atoms/input";
import Select from "../../atoms/selector";
import { SelectorWrapper } from "../personal-info/personal-info";

const BillingInfo = () => {
  const [formField, setFormField] = useState({
    cardNumber: "",
    cardName: "",
    cardExp: "",
    cardCvv: "",
  });

  const [cardType, setCardType] = useState("Visa");

  const onCardNumChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputVal = e.target.value;
    inputVal = inputVal.replace(/\s/g, "");
    let newVal = "";
    for (let i = 0; i < inputVal.length; i++) {
      if (i % 4 == 0 && i > 0) newVal = newVal.concat(" ");

      newVal = newVal.concat(inputVal[i]);
    }

    setFormField({ ...formField, cardNumber: newVal });
  };

  return (
    <div>
      <Input
        value={formField.cardName}
        onChange={(e) =>
          setFormField({ ...formField, cardName: e.target.value })
        }
        required
        title="Name on Card"
        placeholder="Opara Linus Ahmed"
      />
      <Select
        options={["Visa", "Verve", "Mastercard"]}
        setSelectedItem={setCardType}
        title="CardType"
        selectedItem={cardType}
        required
      />
      <SelectorWrapper>
        <Input
          value={formField.cardNumber}
          maxLength={19}
          required
          title="Card details"
          placeholder="44960  44960  44960  44960"
          onChange={onCardNumChange}
        />
        <SelectorWrapper>
          <Input required title="Expiry date" placeholder="04 / 23" />
          <Input required title="cvv" placeholder="923" />
        </SelectorWrapper>
      </SelectorWrapper>
    </div>
  );
};

export default BillingInfo;
function setFormField(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}
