import { useState, Component } from 'react'
import LogoIcon from '../../assets/inmogr.svg'
import tw from "tailwind-styled-components"

class Header extends Component {

    constructor(props: any){
        super(props);
    }

    render()
    {

        const LogoContainer = tw.div `w-full bg-green-100 p-5`

        const LogoWithText = tw.div `
        flex
        items-center
        justify-center
        h-8
        m-2
        `;

        const LogoImg = tw.span`
        `;
        const LogoTxt = tw.span`
        text-4xl
        text-green-600
        font-bold
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
