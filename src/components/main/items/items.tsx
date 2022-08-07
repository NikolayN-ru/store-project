import React, { FC } from "react"
import Item from "./item";
import { ItemsWrapper } from "./items.styled";

const Items: FC = () => {
    return (
        <ItemsWrapper>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </ItemsWrapper>
    )
}

export default Items;