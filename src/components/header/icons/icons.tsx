import React from 'react';
import { CartIco, CartIcoTotal, IconsWrapper, UserIco, UserIcomenu } from './icons.styled';
// import cart from './cart.svg';
// import cart from './notofocation.svg';
// import cart from './user.svg';

const CartIcoTotalNUmber: number = 2;

const Icons = () => {
    return (
        <IconsWrapper>
            <CartIco>
                {/* <img src={cart} alt='cart' /> */}
                <img src='./cart.svg' alt='cart' />
                <CartIcoTotal>
                    {CartIcoTotalNUmber}
                </CartIcoTotal>
            </CartIco>
            <img src='./notification.png' />
            <UserIco>
                <img src='./user.png' />
                <UserIcomenu>
                    Login / signUp
                </UserIcomenu>
            </UserIco>
        </IconsWrapper>

    )
}
export default Icons;