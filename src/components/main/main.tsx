import React, { FC } from "react"
import BreadCamps from "./breadCamps";
import FilterBlock from "./filterBlock/";
import Items from "./items";
import { MainContent, MainWrapper } from "./main.styled";

const Main: FC = () => {
    return (
        <MainWrapper>
            <FilterBlock />
            <MainContent>
                <BreadCamps />
                <Items />
            </MainContent>
        </MainWrapper>
    )
}

export default Main;