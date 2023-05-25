import { FunctionComponent } from "react";

import './Footer.css';

interface NavBarProps {}

const Footer: FunctionComponent<NavBarProps> = () => {
  return (
    <div className={"FooterContainer"}>
      <span className="FooterText">Brought to you with ❤ from Team yuHacks</span>
    </div>
  );
};

export default Footer;