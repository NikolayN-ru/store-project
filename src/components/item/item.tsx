import React, { FC } from "react";
import { useParams } from "react-router";
import { ItemWrapper } from "./item.styled";

const Item: FC = () => {

    const { itemId } = useParams();
    
    return (
        <ItemWrapper>
            ItemWrapper - {itemId}
        </ItemWrapper>
    )
}

export default Item;