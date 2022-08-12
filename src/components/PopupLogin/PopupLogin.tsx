import React, { FC, useState } from "react"
import { ButtonClose, Input, PopupWrapper } from "./PopupLogin.styled";

const PopupLogin: FC<any> = ({ }) => {
    // const [stateLike, setStateLike] = useState(false);
    return (
        <PopupWrapper>
            <ButtonClose/>
            Login
            <Input/>
            <Input/>
        </PopupWrapper>
    )
}

export default PopupLogin;