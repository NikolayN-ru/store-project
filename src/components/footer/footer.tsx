import React, { FC } from "react"
import { ButtonFooter, FooterWrapper, InputFooter, InputFooterBtn, InputFooterWrapper, LinkMore, ListHeader, ListItem, ListLink } from "./Footer.styled";
import Telegram from "./Telegram";
import Vk from "./Vk";
import arrow from '../../assets/arrow.svg';

const stateItems = ['Mafil', 'Sandnes Garn', 'Infinity', 'Laines Du Nord', 'Lana Gatto', 'Lana Grossa', 'Mondial', 'Ecafil', 'Drops', 'Host Garn', 'Soft Donigal Tweed']
const stateMenu = ['О нас', 'Блог об изделиях', 'Купить в кредит', 'Доставка по РФ', 'Способы оплаты товаров', 'Гарантия и возврат товаров', 'Отзывы покупателей', 'Политика конфиденциальности', 'Контакты и адрес шоу-рума']
const stateContacts = ['+7 925 026 44 22', '+7 925 026 69 44', 'info@girobay.com', '125284, Россия, г. Москва, ул. Поликарпова, д. 27', 'Пн - Пт: 10.00 - 20.00 Сб - Вс: 11.00 - 20.00', 'ОГРНИП: 000000000000000']

const Footer: FC = () => {
    return (
        <FooterWrapper>
            {/* <Vk /> */}
            {/* <Telegram /> */}
            <ListLink>
                <ListHeader>
                    Каталог товаров
                </ListHeader>
                {stateItems.map((item, id) => <ListItem key={id}>{item}</ListItem>)}
                <LinkMore>Показать еще</LinkMore>
            </ListLink>

            <ListLink>
                <ListHeader>
                    О магазине
                </ListHeader>
                {stateMenu.map((item, id) => <ListItem key={id}>{item}</ListItem>)}
            </ListLink>

            <ListLink>
                <ListHeader>
                    Контакты
                </ListHeader>
                {stateContacts.map((item, id) => <ListItem key={id}>{item}</ListItem>)}
                <LinkMore>Все контакты</LinkMore>
            </ListLink>

            <ListLink>
                <ListHeader>
                    Подписка
                </ListHeader>
                <InputFooterWrapper>
                    <InputFooter placeholder="E-mail"/>
                    <InputFooterBtn>
                        <img src={arrow} alt="arrow" />
                    </InputFooterBtn>
                </InputFooterWrapper>
                <ButtonFooter>
                    Обратная связь
                </ButtonFooter>

            </ListLink>
        </FooterWrapper>
    )
}

export default Footer;
