import React, { FC } from "react"
import { Link } from "react-router-dom";
import { ButtonCart, CartItems, CartItemsWrapper, CartTotal, CartWrapper, InputBonus, Title } from "./Cart.styled";
import CartItem from "./CartItem/CartItem";

const Cart: FC = () => {
    return (
        <CartWrapper>
            <Title>
                Корзина
            </Title>
            <CartItemsWrapper>
                <CartItems>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </CartItems>
                <CartTotal>
                    итого - 12230р.
                    <hr />
                    промокод код
                    <InputBonus placeholder="введите код" />
                    <Link to={"/order"}>
                        <ButtonCart>
                            Оформить заказ
                        </ButtonCart>
                    </Link>
                </CartTotal>
            </CartItemsWrapper>
        </CartWrapper>
    )
}
export default Cart;
