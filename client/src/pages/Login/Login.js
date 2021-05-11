import React from "react";
import {
  Card,
  StyledInput,
  Label,
  Button,
  InputGroup,
  Error,
  Border,
  StyledLinkBtn,
} from "./Login.elem";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {
  loginUser,
  useAuthDispatch,
  useAuthState,
} from "../../contexts/AuthContext";
import { useHistory } from "react-router";
import Message from "../../components/Message/Message";

const Login = () => {
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();
  const history = useHistory();

  function handleResetLoginFailMsg() {
    dispatch({ type: "AUTH_RESET" });
  }

  const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <InputGroup>
        <Label htmlFor={props.id || props.name}>{label}</Label>
        <StyledInput className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
      </InputGroup>
    );
  };

  return (
    <Card>
      {loading ? (
        <Message text="Loading..." />
      ) : errorMessage ? (
        <Message error text={errorMessage} />
      ) : (
        <Message text="Please sign in to save your list" />
      )}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            setSubmitting(true);
            const res = await loginUser(dispatch, values);

            if (res.name) {
              history.push("/");
            }
            setSubmitting(false);
          } catch (error) {
            console.log("error from login page", error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput name="email" type="email" placeholder="Email address" />
            <TextInput name="password" type="password" placeholder="Password" />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Please wait..." : "Sign In"}
            </Button>
          </Form>
        )}
      </Formik>
      <Border />

      <StyledLinkBtn to="/register" onClick={handleResetLoginFailMsg}>
        Sign Up
      </StyledLinkBtn>
    </Card>
  );
};

export default Login;
