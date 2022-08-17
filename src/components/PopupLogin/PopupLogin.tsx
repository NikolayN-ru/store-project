import React, { FC } from "react"
import { ButtonClose, Input, PopupWrapper } from "./PopupLogin.styled";

const PopupLogin: FC = () => {
    // const [stateLike, setStateLike] = useState(false);
    return (
        <PopupWrapper>
            <ButtonClose/>
            Login
            <Input/>
            <Input/>
            <button>+</button>
        </PopupWrapper>
    )
}

export default PopupLogin;