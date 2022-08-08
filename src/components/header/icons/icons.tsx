import React, { FC, useState } from 'react';
import { CartIco, CartIcoTotal, IconsWrapper, UserIco, UserIcomenu, UserIcomenuText } from './icons.styled';
// import cart from './cart.svg';
// import cart from './notofocation.svg';
// import cart from './user.svg';

const CartIcoTotalNUmber: number = 2;

const Icons: FC = () => {
    const [state, setState] = useState<boolean>(false)
    return (
        <IconsWrapper>
            <CartIco>
                <img src="cart.svg" alt='cart' />
                {/* <img src="image.png" alt='cart' /> */}
                <CartIcoTotal>
                    {CartIcoTotalNUmber}
                </CartIcoTotal>
            </CartIco>
            <img src='notification.svg' />
            <UserIco onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
                <img src='user.svg' />
                <UserIcomenu disp={state}>
                    <UserIcomenuText>
                        Login /
                    </UserIcomenuText>
                    <UserIcomenuText>
                        / signUp
                    </UserIcomenuText>

                </UserIcomenu>
            </UserIco>
        </IconsWrapper>
    )
}
export default Icons;
