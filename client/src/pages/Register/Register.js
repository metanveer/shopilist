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
} from "./Register.elem";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useAuthDispatch, useAuthState } from "../../contexts/AuthContext";
import { registerUser } from "../../contexts/AuthContext";
import { useHistory } from "react-router";
import Message from "../../components/Message/Message";

const Register = () => {
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();
  const history = useHistory();

  console.log("Dispatch", dispatch);

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
      ) : null}
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(30, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Password is required"),
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords didn't match!"
          ),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            setSubmitting(true);
            console.log(values);
            const res = await registerUser(dispatch, values);
            if (res.name) {
              history.push("/");
            }
            setSubmitting(false);
          } catch (error) {
            console.log("error from register page", error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput name="name" type="text" placeholder="Enter your name" />

            <TextInput name="email" type="email" placeholder="Email address" />
            <TextInput name="password" type="password" placeholder="Password" />
            <TextInput
              name="passwordConfirmation"
              type="password"
              placeholder="Confirm password"
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </Button>
          </Form>
        )}
      </Formik>
      <Border />

      <StyledLinkBtn to="/login">Sign In</StyledLinkBtn>
    </Card>
  );
};

export default Register;
