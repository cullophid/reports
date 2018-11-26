import * as React from "react";
import { css } from "emotion";
import { Spinner } from "../components/Spinner";
import history from "../history";
import { center } from "../styles";

const Styles = {
  page: css`
    ${center};
    height: 100vh;
    background: #eee;
  `,

  loginForm: css`
    height: 56px;
    width: 500px;
    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: stretch;
  `,

  input: css`
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
  `,

  submit: css`
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
  `
};

type State = {
  email: string;
};
export default class LoginPage extends React.Component<{}, State> {
  constructor(p: {}) {
    super(p);
    this.state = {
      email: ""
    };
  }
  render() {
    const login = () => history.push("/");
    return (
      <div css={Styles.page}>
        <form css={Styles.loginForm} onSubmit={login}>
          <input
            css={Styles.input}
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="Email"
          />
          <button css={Styles.submit} onClick={login}>
            <Spinner size={20} color="white" />
          </button>
        </form>
      </div>
    );
  }
}
