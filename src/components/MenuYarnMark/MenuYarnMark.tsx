import React, { FC } from "react";
import MenuDropItem from "./MenuDropItem/MenuDropItem";
import { Icon, MenuDropOne, MenuIco } from "./MenuYarnMark.styled";

const dataItemZero = [
    { title: 'Вещи', data: ['Кепки', 'Футболки', 'Джинсы'] },
    { title: 'data-0', data: ['mackData0',] },
    { title: 'mackData-0', data: ['mackData', 'mackData', 'mackData'] },
    { title: 'mackData', data: ['mackData'] }
]

const dataItemOne = [
    { title: 'Мобильные телефоны', data: ['Смартфоны', 'Xiaomi', 'Samsung', 'Honor', 'Huawei', 'Menzu', 'Nokia', 'Кнопочные телефоны', 'Стилусы'] },
    { title: 'Гаджеты', data: ['Смарт-часы и браслеты',] },
    { title: 'Наушники и гарнитуры', data: ['Проводные', 'Беспроводные'] },
    { title: 'Запчасти', data: ['Дисплеи', 'Аккумуляторы'] },
    { title: 'Чехлы для смартфонов' },
    { title: 'Аксессуары для телефонов', data: ['Зарядные устройста', 'Кабели и адаптеры', 'Внешние аккумуляторы', 'Чехлы', 'Держатели', 'Стилусы', 'Защитные стекла и пленки', 'Карты памяти'] }
]

const dataItemTwo = [
    { title: 'Вещи', data: ['Кепки', 'Футболки', 'Джинсы'] },
    { title: 'data-2', data: ['mackData0',] },
    { title: 'mackData-2', data: ['mackData', 'mackData', 'mackData'] },
    { title: 'mackData-2', data: ['mackData'] },
    { title: 'mackData-2', data: ['mackData'] },
    { title: 'mackData-2', data: ['mackData'] },
    { title: 'mackData-2', data: ['mackData'] }
]

const dataItemTree = [
    { title: 'mackData-0', data: ['mackData', 'mackDat-3', 'mackData', 'mackData', 'mackData', 'mackData', 'mackData', 'mackData'] },
    { title: 'mackData-0', data: ['mackData', 'mackDat-3', 'mackData', 'mackData', 'mackData', 'mackData', 'mackData', 'mackData'] },
    { title: 'mackData-0', data: ['mackData', 'mackDat-3', 'mackData', 'mackData', 'mackData', 'mackData', 'mackData', 'mackData'] },
    { title: 'mackData', data: ['mackData-3'] }
]

const dataAwesome = [
    { title: 'nameCaterory', data: ['no-data'] }
]

// const stateItems = ['Mafil', '', '', '', '', '', '', '', '', '', '']


const data = [
    { id: 1, title: "Mafil", url: "", ico: "", dataItem: dataItemZero },
    { id: 2, title: "Sandnes Garn", url: "", ico: "", dataItem: dataItemOne },
    { id: 3, title: "Infinity", url: "", ico: "", dataItem: dataItemTwo },
    { id: 4, title: "Laines Du Nord", url: "", ico: "", dataItem: dataItemTree },
    { id: 5, title: "Lana Gatto", url: "", ico: "", dataItem: dataAwesome },
    { id: 6, title: "Lana Grossa", url: "", ico: "", dataItem: dataAwesome },
    { id: 7, title: "Mondial", url: "", ico: "", dataItem: dataAwesome },
    { id: 8, title: "Ecafil", url: "", ico: "", dataItem: [] },
    { id: 9, title: "Drops", url: "", ico: "", dataItem: [] },
    { id: 10, title: "Host Garn", url: "", ico: "", dataItem: [] },
    { id: 11, title: "Soft Donigal Tweed", url: "", ico: "", dataItem: [] },
]


const MenuDrop: FC<any> = ({ state }: any) => {
    return (
        <MenuDropOne state={state}>
            {data.map((item, id) => <MenuDropItem key={id} {...item} />)}
        </MenuDropOne>
    )
}
export default MenuDrop;
