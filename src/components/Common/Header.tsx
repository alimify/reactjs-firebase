import { useState, Component } from "react";
import LogoIcon from "../../assets/inmogr.svg";
import { LogoContainer, LogoWithText, LogoImg, LogoTxt } from "../../styles";

class Header extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <LogoContainer>
        <LogoWithText>
          <LogoImg>
            <img src={LogoIcon} />
          </LogoImg>
          <LogoTxt>INMOGR</LogoTxt>
        </LogoWithText>
      </LogoContainer>
    );
  }
}

export default Header;
