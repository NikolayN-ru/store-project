import React, { FC, useState } from 'react';
import { CartIco, CartIcoTotal, IconsWrapper, UserIco, UserIcomenu } from './icons.styled';
// import cart from './cart.svg';
// import cart from './notofocation.svg';
// import cart from './user.svg';

const CartIcoTotalNUmber: number = 2;

const Icons: FC = () => {
    const [state, setState] = useState<boolean>(false)
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
            <UserIco onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
                <img src='./user.png' />
                <UserIcomenu disp={state}>
                    Login / signUp
                </UserIcomenu>
            </UserIco>
        </IconsWrapper>
    )
}
export default Icons;