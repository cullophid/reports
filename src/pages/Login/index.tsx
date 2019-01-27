import React, { useState } from "react";
import styled from "styled-components";
import { Spinner } from "../../components/Spinner";
import history from "../../history";
import * as Auth0 from "../../auth0";

type State = {
  email: string;
};

export const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    let res = await Auth0.passwordLess(email);
    console.log(res);
    history.push("/check-your-email");
  };
  return (
    <Page>
      <LoginForm onSubmit={login}>
        <Input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="Email"
        />
        <Submit onClick={login}>
          <Spinner size={20} color="white" />
        </Submit>
      </LoginForm>
    </Page>
  );
};

const Page = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 100vh;
  background: #eee;
`;

const LoginForm = styled.form`
  height: 56px;
  width: 500px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: stretch;
`;

const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  background: none;
  border: none;
  flex: 1;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: #88bc32;
  border: none;
  color: white;
  font-size: 18px;
  width: 70px;
  &:focus {
    outline: none;
  }
`;
