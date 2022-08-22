import { Dispatch, useState } from "react";
import { InputProps } from "../../utils/types";
import CaretDown from "../../vectors/caret-down";
import { Text } from "../Typography";
import { SelectContainer } from "./select";

interface SelectProps extends InputProps {
  options: Array<string>;
  setSelectedItem: Dispatch<React.SetStateAction<string>>;
  selectedItem?: string;
}

const Select = ({
  title,
  value,
  required,
  width,
  options,
  setSelectedItem,
  selectedItem,
}: SelectProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <SelectContainer show={toggle} width={width}>
      <label htmlFor={title}>
        {title} {required && <sup>*</sup>}
      </label>
      <div className="input-wrapper" onClick={() => setToggle(!toggle)}>
        <Text>{selectedItem}</Text>{" "}
        <CaretDown
          style={{ cursor: "pointer" }}
          onClick={() => setToggle(!toggle)}
        />
        <div className="select" onClick={() => setToggle(!toggle)}>
          {options.map((val, indx) => (
            <Text
              key={val}
              hoverColor="primary"
              pd="0.5rem"
              onClick={() => {
                setSelectedItem(val);
                setToggle(!toggle);
              }}
            >
              {val}
            </Text>
          ))}
        </div>
      </div>
    </SelectContainer>
  );
};

export default Select;
