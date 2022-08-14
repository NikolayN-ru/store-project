import React, { FC } from "react"
import { CartItemWrapper, ImgItem } from "./CartItem.styled";
import image2 from '../../../assets/image2.webp';

const CartItem: FC = () => {
    return (
        <CartItemWrapper>
            <ImgItem src={image2} />
            item
            <div>
                <p>Выберите количество:</p>
                1
            </div>
            <div>
                <p>цена:</p>
                555 р
            </div>
            <button>убрать</button>
        </CartItemWrapper>
    )
}
export default CartItem;