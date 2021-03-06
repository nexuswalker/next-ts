/*import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NextPage } from "next";

interface Props {
  username: string;
  password: string;
}

const Login: NextPage<Props> = (props) => {
  const initialValues: {
    username: string;
    password: string;
  } = {
    username: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!")
  });

  const handleLogin = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      <Form>
        <div>
          <label htmlFor="username">Password</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
};
*/
