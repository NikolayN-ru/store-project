import React from "react"
import {Link, useLocation, useParams} from "react-router-dom";
import {HeadeMenuItem, HeaderMenuWrapper} from "./headerMenu.styled";

// const stateItems = ['Mafil', 'Sandnes Garn', 'Infinity', 'Laines Du Nord', 'Lana Gatto', 'Lana Grossa', 'Mondial', 'Ecafil', 'Drops', 'Host Garn', 'Soft Donigal Tweed']

interface stateItemsInterface {
	readonly pk: number;
	readonly title: string;
	readonly link: string;
}

interface StateItems {
	pk?: number,
	title: string,
	link: string,
}

interface A {
	title: string,
	link: string
}

interface B extends A {
	pk: number
}

const a: Required<StateItems> = {
	pk: 0,
	title: '',
	link: ''
}

const stateItems: Array<StateItems> = [
	{title: 'пряжа', link: 'yarn'},
	{title: 'спицы', link: 'needles'},
	{title: 'изделия', link: 'product'},
	{title: 'блог', link: 'blog'},
	{title: 'о нас', link: 'about'},
]

const HeaderMenu = () => {
	const {pathname} = useLocation();
	// console.log(item, 'item');
	
	return (
		<HeaderMenuWrapper>
			{stateItems.map((item, id) => {
				const isSelect = pathname.startsWith(`/${item.link}`)
				return (
					<HeadeMenuItem key={id} select={isSelect}>
						<Link to={item.link}>{item.title}</Link>
					</HeadeMenuItem>
				)
			})}
		</HeaderMenuWrapper>
	)
}

export default HeaderMenu;