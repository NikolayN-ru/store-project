import React, { FC } from "react"
import { Button, ContactsData, InputOrder, OrderWrapper, Select, TitleWrite, WrapperSelect } from "./Order.styled";


const Order: FC = () => {
    return (
        <OrderWrapper>
            Order
            <ContactsData>
                <InputOrder placeholder='Введите ФИО' />
                <InputOrder placeholder='+7 --- --- -- --' />
                <InputOrder placeholder='Введите E-mail' />
            </ContactsData>
            <TitleWrite>2. Выберите способ доставки</TitleWrite>
            <WrapperSelect>
                <Select>Самовывоз, Турбинная 40 <input type="radio" /></Select>
                <Select>Иные пункты выдачи <input type="radio" /></Select>
                <Select>Бесплатная доставка по г. Екатеринбургу <input type="radio" /></Select>
            </WrapperSelect>
            <TitleWrite>3. Выберите способ оплаты</TitleWrite>
            <WrapperSelect>
                <Select>При получении <input type="radio" /></Select>
                <Select>Онлайн <input type="radio" /></Select>
                <Select>По счету<input type="radio" /></Select>
            </WrapperSelect>
            <Button>
                Оформить заказ
            </Button>
        </OrderWrapper>
    )
}
export default Order;
