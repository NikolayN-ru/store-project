import React from "react"
import { Link, useParams } from "react-router-dom";
import { HeadeMenuItem, HeaderMenuWrapper } from "./headerMenu.styled";
// const stateItems = ['Mafil', 'Sandnes Garn', 'Infinity', 'Laines Du Nord', 'Lana Gatto', 'Lana Grossa', 'Mondial', 'Ecafil', 'Drops', 'Host Garn', 'Soft Donigal Tweed']

interface stateItemsInterface {
    readonly pk: number;
    readonly title: string;
    readonly link: string;
}

const stateItems: ReadonlyArray<Omit<stateItemsInterface, "pk">> = [
    { title: 'пряжа', link: 'yarn' },
    { title: 'спицы', link: 'needles' },
    { title: 'изделия', link: 'product' },
    { title: 'блог', link: 'blog' },
    { title: 'о нас', link: 'about' },
]

const HeaderMenu = () => {
    // const item = useParams();
    // console.log(item, 'item');
    return (
        <HeaderMenuWrapper>
            {stateItems.map((item, id) => {
                return (
                    <HeadeMenuItem key={id} >
                        <Link to={item.link}>{item.title}</Link>
                    </HeadeMenuItem>
                )
            })}
        </HeaderMenuWrapper>
    )
}

export default HeaderMenu;