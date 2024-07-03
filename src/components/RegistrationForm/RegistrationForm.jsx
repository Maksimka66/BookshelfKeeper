import { Formik, Form } from "formik";
import { useId } from "react";
import { registerUserSchema } from "../../Schemas/schemas";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();

  const showRegisterForm = () => {};

  const submitRegister = () => {};

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitRegister}
        validationSchema={registerUserSchema}
      >
        <Form></Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
