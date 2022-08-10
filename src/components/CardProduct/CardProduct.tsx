import React, { FC } from "react"
import { Link } from "react-router-dom";
import { LikeIcon } from "../Icons/Like";
import image from '../../assets/image.png';

import { CardProductWrapper, ItemButton, ItemImage, ItemPrice, ItemTitle, ItemLike } from "./CardProduct.styled";

const CardProduct: FC<any> = ({ link }) => {
    return (
        <Link to={`/item/${Number(link)}`}>
            <CardProductWrapper>
                <ItemLike>
                    <LikeIcon isSelected={true} />
                </ItemLike>
                <ItemImage src={image} />
                <ItemTitle>
                    Drops Air
                </ItemTitle>
                <ItemPrice>332 ₽ </ItemPrice>
                <ItemButton>в корзину</ItemButton>
            </CardProductWrapper>
        </Link>
    )
}

export default CardProduct;
