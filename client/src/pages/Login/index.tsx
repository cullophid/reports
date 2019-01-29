import React, { useState } from "react";
import styled from "styled-components";
import { Spinner } from "../../components/Spinner";
import { useMutation } from "../../hooks";
import gql from "graphql-tag";
import { Redirect } from "react-router";
import { Icon } from "../../components/Icon";

const AUTH_MUTATION = gql`
  mutation Authenticate($email: Email!) {
    authenticate(email: $email)
  }
`;

export const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [login, loginResponse] = useMutation({
    mutation: AUTH_MUTATION
  });
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    login({ email });
  };

  if (loginResponse.status === "Ready") {
    return <Redirect push to="/check-your-email" />;
  }
  return (
    <Page>
      <LoginForm onSubmit={submit}>
        <Input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="Email"
        />
        <Submit onClick={submit}>
          {loginResponse.status === "Loading" ? (
            <Spinner size={36} inverse />
          ) : (
            <Icon name="email" size={36} color="white" />
          )}
        </Submit>
      </LoginForm>
    </Page>
  );
};

const Page = styled.div`
  display: grid;
  grid-auto-columns: auto;
  align-content: center;
  justify-content: center;
  height: 100vh;
  background: #eee;
`;

const LoginForm = styled.form`
  height: 56px;
  width: 80vw;
  justify-self: center;
  max-width: 500px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: 1fr auto;
`;

const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  background: none;
  width: 100%;
  display: block;
  border: none;
  color: #656565;
  font-size: 24px;
  padding: 0 20px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #999;
  }
`;

const Submit = styled.button`
  font-family: "Montserrat", sans-serif;
  display: grid;
  place-content: center center;
  background: #88bc32;
  border: none;
  color: white;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;
