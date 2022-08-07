import React, { FC } from "react"
import { ItemWrapper, ItemButton, ItemImage, ItemPrice, ItemTitle, ItemLike } from "./item.styled";

const Item: FC = () => {
    return (
        <ItemWrapper>
            <ItemLike />
            <ItemImage />
            <ItemTitle>
                Drops Air
            </ItemTitle>
            <ItemPrice>332 ₽ </ItemPrice>
            <ItemButton>в корзину</ItemButton>
        </ItemWrapper>
    )
}

export default Item;