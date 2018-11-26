import * as React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import { center, column, columnSpacing } from "../styles";
import * as Theme from "../theme";

const Styles = {
  header: css`
    display: grid;
    grid-template-columns: 50px auto;
    height: 60px;
  `,
  menuButton: css`
    ${center};
    width: 50px;
    height: 50px;
    line-height: 1;
    border-radius: 1000px;
    border: 4px solid white;
    box-sizing: border-box;
    background: ${Theme.primary};
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    z-index: 100;
  `,

  menu: css`
    ${column};
    ${columnSpacing(15)};
    padding: 30px;
    position: fixed;
    height: 100%;
    width: 300px;
    background: ${Theme.primary};
    color: white;
    box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: transform 300ms;
    z-index: 200;
  `,

  overlay: css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
  `
};
type State = {
  showMenu: boolean;
};
export class Header extends React.PureComponent<{}, State> {
  readonly state = { showMenu: false };
  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };
  render() {
    return (
      <header css={Styles.header}>
        {this.state.showMenu && (
          <div css={Styles.overlay} onClick={this.toggleMenu} />
        )}
        <nav
          css={Styles.menu}
          style={this.state.showMenu ? { transform: "translateX(0)" } : {}}
        >
          <Link to="/">Reports</Link>
          <Link to="/datastores">Datastores</Link>
        </nav>
        <button css={Styles.menuButton} onClick={this.toggleMenu}>
          AM
        </button>
      </header>
    );
  }
}
