import { FunctionComponent } from "react";

import './NavBar.css';
import UserSnippet from "./UserSnippet.component";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <div className={"NavBarContainer"}>
      <div className="NavBarLogo">
        <a className="LogoText" href="/">
          <span className="LogoHighlight">yuHacks</span>
          (
          <span className="LogoSubHighlight">2023</span>
          )
        </a>
      </div>
      <div className="NavLinkContainer">
        <UserSnippet />
      </div>
    </div>
  );
};

export default NavBar;
