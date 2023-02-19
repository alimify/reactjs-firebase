import { useState, Component } from 'react'
import LogoIcon from '../../assets/inmogr.svg'
import styled from 'styled-components';

class Header extends Component {

    constructor(props: any){
        super(props);
    }

    render()
    {

        const LogoContainer = styled.div `
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 10px;
        height: 105px;
        left: 0px;
        top: 0px;
        background: #C7F0DF`

        const LogoWithText = styled.div `
        display: flex;
        gap: 10px;
        `;

        const LogoImg = styled.span`
        
        `;
        const LogoTxt = styled.span`
        left: 48.73%;
        right: 39.26%;
        top: 0%;
        bottom: 0%;
        
        font-family: 'Poppins';
        font-style: bold;
        font-weight: 700;
        font-size: 36px;
        line-height: 54px;
        
        color: #2DA771;
        `;
        

        return (
            <LogoContainer>
                <LogoWithText>
                    <LogoImg><img src={LogoIcon}/></LogoImg>
                    <LogoTxt>INMOGR</LogoTxt>
                </LogoWithText>
            </LogoContainer>
        )
    }
}

export default Header
