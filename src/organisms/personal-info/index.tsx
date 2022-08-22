import React, { useState } from "react";
import Input from "../../atoms/input";
import Select from "../../atoms/selector";
import { SelectorWrapper } from "./personal-info";

const PersonalInfo = () => {
  const states = ["Abia", "Adamawa", "Akwa-Ibom"];
  const [state, setState] = useState(states[0]);
  return (
    <div>
      <Input placeholder="Opara Linus Ahmed" title="Name" />
      <Input
        placeholder="OparaLinusAhmed@devmail.com"
        title="Email"
        required
        description="The purchase receipt would be sent to this address"
      />
      <Input
        placeholder="The address of the user goes here"
        title="Address 1"
      />
      <Input placeholder="and here" title="Address 2" />
      <SelectorWrapper>
        <Input placeholder="Surulere" title="Local Government" />
        <Select
          selectedItem={state}
          setSelectedItem={setState}
          options={states}
          title="State"
        />
      </SelectorWrapper>
    </div>
  );
};

export default PersonalInfo;
