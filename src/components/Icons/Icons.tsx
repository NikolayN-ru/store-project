import React, { FC, useCallback, useState } from 'react';
import { CartIcoTotal, CartIcoWrapper, IconsWrapper, UserIco, UserIcomenu, UserIcomenuText, IcoItem } from './Icons.styled';
import cart from '../../assets/cart.svg';
import notification from '../../assets/notification.svg';
import user from '../../assets/user.svg';
import { CartIcon } from './Cart';
import { BooleanLocale } from 'yup/lib/locale';


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
            <CartIcoWrapper>
                <CartIcon isHover={false} />
                <CartIcoTotal>
                    {CartIcoTotalNUmber}
                </CartIcoTotal>
            </CartIcoWrapper>
            <IcoItem src={notification} />
            <UserIco onMouseEnter={toggle} onMouseLeave={toggle}>
                <IcoItem src={user} />
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
