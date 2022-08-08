import React, { FC } from "react"
import Item from "./item";
import { ItemsWrapper } from "./items.styled";

const localState = [
    {pk: 1, title:'no', price:500},
    {pk: 2, title:'no', price:500},
    {pk: 3, title:'no', price:500},
    {pk: 4, title:'no', price:500},
    {pk: 5, title:'no', price:500},
    {pk: 6, title:'no', price:500},
    {pk: 7, title:'no', price:500},
    {pk: 8, title:'no', price:500},
    {pk: 9, title:'no', price:500},
]

const Items: FC = () => {
    return (
        <ItemsWrapper>
            {localState.map(({pk}, id) => <Item key={id} link={pk}/>)}
        </ItemsWrapper>
    )
}

export default Items;
