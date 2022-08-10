import React from "react"
import { Input, InputPanelWrapper } from "./inputPanel.styled";

const InputPanel = () => {
    return (
        <InputPanelWrapper>
            <Input placeholder='строка поиска' />
        </InputPanelWrapper>
    )
}

export default InputPanel;