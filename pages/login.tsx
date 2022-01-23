import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Router from "next/router";

//import { NextPage } from "next";
import { betterLogin /*login*/ } from "../services/auth-service";
import { useMutation, useQueryClient } from "react-query";
/*import { RouteComponentProps } from "react-router-dom";

interface RouterProps {
  history: string;
}

type Props = RouteComponentProps<RouterProps>;*/

type loginInfo = {
  username?: string;
  password?: string;
  token?: string;
};

interface Props {
  username: string;
  password: string;
}

const UsereeForm = (props: { open: any; handleClose: any }) => {
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
  const { open, handleClose } = props;
  //const queryClient = useQueryClient();
  /*const { register, handleSubmit, errors } = useForm<loginInfo>({
    mode: 'onChange'
  });*/
  const { mutate, isLoading } = useMutation(betterLogin, {
    onSuccess: (data: loginInfo) => {
      console.log(data);
      const message = "success";
      alert(message);
    },
    onError: () => {
      alert("there was an error");
    }
    /*onSettled: () => {
      queryClient.invalidateQueries("create");
    }*/
  });
  const onSubmit = (data: loginInfo) => {
    /*const employee = {
      ...data
    };
    mutate(employee);*/
    console.log(data);
  };

  //const Login: NextPage<Props> = (props) => {
  //const Login: React.FC<Props> = (/*{ history }*/) => {
  /*const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

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

    setMessage("");
    setLoading(true);

    login(username, password).then(
      () => {*/
  /*history.push("/profile");
        window.location.reload();*/
  /*console.log("user authenticated! Going to dashboard now --->");
        Router.push("/profile-page");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };*/

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" className="form-control" />
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                //disabled={loading}
              >
                <span>Login</span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UsereeForm;
