import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
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

  const submitRegister = () => {};

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitRegister}
        validationSchema={registerUserSchema}
      >
        <Form>
          <div>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage name="name" as="span" />
          </div>

          <div>
            <label htmlFor={emailId}>Email</label>
            <Field type="email" name="email" id={emailId} />
            <ErrorMessage name="email" as="span" />
          </div>

          <div>
            <label htmlFor={passwordId}>Password</label>
            <Field type="password" name="password" id={passwordId} />
            <ErrorMessage name="password" as="span" />
          </div>

          <div>
            <label htmlFor={confirmPasswordId}>Confirm password</label>
            <Field type="password" name="password" id={confirmPasswordId} />
            <ErrorMessage name="password" as="span" />
          </div>

          <div>
            <button type="submit">Register</button>
          </div>
        </Form>
      </Formik>
      <div>
        <p>Already have an account?</p>
        <Link to="/auth/login">Log in</Link>
      </div>
    </>
  );
};

export default RegistrationForm;
