import React, {FC, MouseEventHandler, useCallback, useState} from 'react';
import {CartIco, CartIcoTotal, IconsWrapper, UserIco, UserIcomenu, UserIcomenuText} from './icons.styled';

const CartIcoTotalNUmber: number = 2;

const useToggle = (initialState: boolean) => {
	const [isToggled, setIsToggled] = useState<boolean>(initialState);
	const changeToggle = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		if (e.type === 'mouseenter') {
			setIsToggled(true)
		}
		
		if (e.type === 'mouseleave') {
			setIsToggled(false)
		}
	}, [setIsToggled]);
	
	console.log(isToggled, 'isToggled')
	
	return {
		isToggled,
		changeToggle
	};
	
}

const Icons: FC = () => {
	const {isToggled, changeToggle} = useToggle(false)
	return (
		<IconsWrapper>
			<CartIco>
				<img src="cart.svg" alt='cart'/>
				<CartIcoTotal>
					{CartIcoTotalNUmber}
				</CartIcoTotal>
			</CartIco>
			<img src='notification.svg'/>
			<UserIco
				onMouseEnter={(e) => changeToggle(e)}
				onMouseLeave={(e) => changeToggle(e)}
			>
				<img src='user.svg'/>
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
