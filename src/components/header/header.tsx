import React, { FC } from "react"
import { useState } from "react"
import { HeaderWrapper, Logo, OneDiv } from "./header.styled"
import HeaderMenu from "./headerMenu"
import Icons from "./icons"
import InputPanel from "./inputPanel"


const Header:FC = () => {
    return (
        <HeaderWrapper>
            <Logo/>
            <HeaderMenu />
            <InputPanel />
            <Icons />
        </HeaderWrapper>
    )
}

export default Header;
