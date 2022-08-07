import React from "react"
import { Link } from "react-router-dom";
import { string } from "yup";
import { HeadeMenuItem, HeaderMenuWrapper } from "./headerMenu.styled";

// const stateItems = ['Mafil', 'Sandnes Garn', 'Infinity', 'Laines Du Nord', 'Lana Gatto', 'Lana Grossa', 'Mondial', 'Ecafil', 'Drops', 'Host Garn', 'Soft Donigal Tweed']

interface stateItemsInterface {
    title: string;
    link: string;
}

const stateItems: stateItemsInterface[] = [
    { title: 'пряжа', link: 'yarn' },
    { title: 'спицы', link: 'needles' },
    { title: 'блог', link: 'blog' },
    { title: 'о нас', link: 'about' },
]


const HeaderMenu = () => {
    return (
        <HeaderMenuWrapper>
            {stateItems.map((item, id) => {
                return (
                    <HeadeMenuItem key={id}>
                        <Link to={item.link}>{item.title}</Link>
                    </HeadeMenuItem>
                )
            })}
        </HeaderMenuWrapper>
    )
}

export default HeaderMenu;