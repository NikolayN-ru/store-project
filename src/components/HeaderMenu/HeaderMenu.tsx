import React, { FC } from "react"
import { Link, useParams, useLocation } from "react-router-dom";
import { HeaderMenuItem, HeaderMenuWrapper } from "./HeaderMenu.styled";
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

const HeaderMenu: FC = () => {

    const {pathname} = useLocation();
    console.log(pathname)

    return (
        <HeaderMenuWrapper>
            {stateItems.map((item, id) => {
                const isSelect = pathname.startsWith(`/${item.link}`)
                return (
                    <HeaderMenuItem key={id} select={isSelect}>
                        <Link to={item.link}>{item.title}</Link>
                    </HeaderMenuItem>
                )
            })}
        </HeaderMenuWrapper>
    )
}

export default HeaderMenu;
