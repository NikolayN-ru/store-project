import React, { FC } from "react"
import { FooterWrapper, Social } from "./Footer.styled";

const Footer:FC = () => {
    return (
        <FooterWrapper>
            <Social src='vk.svg'/>
            <Social src='telegram.svg'/>
        </FooterWrapper>
    )
}

export default Footer;