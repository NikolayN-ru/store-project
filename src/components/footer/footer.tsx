import React, { FC } from "react"
import { FooterWrapper, Social } from "./Footer.styled";
import Telegram from "./Telegram";
import Vk from "./Vk";

const Footer:FC = () => {
    return (
        <FooterWrapper>
            <Vk />
            <Telegram />
        </FooterWrapper>
    )
}

export default Footer;