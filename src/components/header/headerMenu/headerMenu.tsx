import React from "react"
import { HeadeMenuItem, HeaderMenuWrapper } from "./headerMenu.styled";

// const stateItems = ['Mafil', 'Sandnes Garn', 'Infinity', 'Laines Du Nord', 'Lana Gatto', 'Lana Grossa', 'Mondial', 'Ecafil', 'Drops', 'Host Garn', 'Soft Donigal Tweed']
const stateItems = ['пряжа', 'спицы', 'блог', '', 'о нас', 'оплата и доставка']


const HeaderMenu = () => {
    return (
        <HeaderMenuWrapper>
            {stateItems.map((item, id) => {
                return (
                    <HeadeMenuItem key={id}>{item}</HeadeMenuItem>
                )
            })}
        </HeaderMenuWrapper>
    )
}

export default HeaderMenu;