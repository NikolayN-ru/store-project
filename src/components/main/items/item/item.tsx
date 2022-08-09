import React, {FC} from "react"
import {Link} from "react-router-dom";
import {ItemWrapper, ItemButton, ItemImage, ItemPrice, ItemTitle, ItemLike} from "./item.styled";
import {LikeIcon} from "../../../header/icons/Like";

const Item: FC<any> = ({link}) => {
	return (
		<Link to={`/item/${Number(link)}`}>
			<ItemWrapper>
				<ItemLike>
					<LikeIcon isSelected={false}/>
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
