import React, { FC } from "react"
import { Link } from "react-router-dom";
import { LikeIcon } from "../Icons/Like";

import { ItemWrapper, ItemButton, ItemImage, ItemPrice, ItemTitle, ItemLike } from "./Item.styled";

const Item: FC<any> = ({ link }) => {
    return (
        <Link to={`/item/${Number(link)}`}>
            <ItemWrapper>
                {/* <ItemLike src='like.svg' /> */}
                <ItemLike>
                    <LikeIcon isSelected={true}/>
                </ItemLike>
                <ItemImage src='image.png'/>
                <ItemTitle>
                    Drops Air
                </ItemTitle>
                <ItemPrice>332 ₽ </ItemPrice>
                <ItemButton>в корзину</ItemButton>
            </ItemWrapper>
        </Link>
    )
}

export default Item;
