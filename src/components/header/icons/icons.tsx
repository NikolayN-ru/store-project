import React, { FC, useCallback, useState } from 'react';
import { CartIco, CartIcoTotal, IconsWrapper, UserIco, UserIcomenu, UserIcomenuText } from './icons.styled';
import cart from '../../../assets/cart.svg';

const CartIcoTotalNUmber: number = 2;

const useToggle = (initialState: any) => {
    const [isToggled, setIsToggled] = useState(initialState);
    const toggle = useCallback(() => setIsToggled(!isToggled), [isToggled]);
    return [isToggled, toggle];
}

const Icons: FC = () => {
    const [isToggled, toggle] = useToggle(false)
    return (
        <IconsWrapper>
            <CartIco>
                {/* <img src="cart.svg" alt='cart' /> */}
                <img src={cart} alt='cart' />
                <CartIcoTotal>
                    {CartIcoTotalNUmber}
                </CartIcoTotal>
            </CartIco>
            <img src='notification.svg' />
            <UserIco onMouseEnter={toggle} onMouseLeave={toggle}>
                <img src='user.svg' />
                <UserIcomenu disp={isToggled}>
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
