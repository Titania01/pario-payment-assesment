import { FormEventHandler, ReactNode } from "react";
import Button from "../../atoms/button";
import { Form } from "./form-layout";

const FormLayout = ({
  children,
  onSubmit,
  onCancel = () => {},
}: {
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  onCancel?: Function;
}) => {
  return (
    <Form onSubmit={onSubmit}>
      {children}
      <div className="form-btn">
        <Button title="Next" type="submit" color="white" />
        <Button
          title="Cancel Payment"
          width="28rem"
          isSecondary
          onClick={() => onCancel()}
        />
      </div>
    </Form>
  );
};

export default FormLayout;
