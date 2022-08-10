import React, { FC } from "react"
import { useState } from "react"
import { HeaderWrapper, Logo, OneDiv } from "./header.styled"

import Icons from "./icons"
import InputPanel from "./inputPanel"
import HeaderMenu from "./headerMenu"


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
