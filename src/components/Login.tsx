import * as React from "react";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import history from "../history";

let Page = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #eee;
`;

let LoginForm = styled.form`
  height: 56px;
  width: 500px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: stretch;
`;

let Input = styled.input`
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

let Submit = styled.button`
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

type State = {
  email: string;
};
export default class Login extends React.Component<{}, State> {
  constructor(p: {}) {
    super(p);
    this.state = {
      email: ""
    };
  }
  render() {
    const login = () => history.push("/");
    return (
      <Page>
        <LoginForm onSubmit={login}>
          <Input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="Email"
          />
          <Submit onClick={login}>
            <Spinner size={20} color="white" />
          </Submit>
        </LoginForm>
      </Page>
    );
  }
}
