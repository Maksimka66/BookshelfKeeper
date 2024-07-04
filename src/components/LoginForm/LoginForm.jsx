import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { loginUserSchema } from "../../Schemas/schemas";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const emailId = useId();
  const passwordId = useId();

  const showLoginForm = () => {};

  const submitLogin = () => {};

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitLogin}
        validationSchema={loginUserSchema}
      >
        <Form>
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
            <button type="submit">Login</button>
            <Link to="/auth/register">Register</Link>
          </div>
        </Form>
      </Formik>
      <div>
        <span>“</span>
        <p>
          Books are the ships of thoughts, wandering through the waves of time.
        </p>
        <div></div>
        <p>Francis Bacon</p>
      </div>
    </>
  );
};

export default LoginForm;
