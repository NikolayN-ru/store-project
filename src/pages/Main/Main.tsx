import React, { FC } from "react"
import BreadCamps from "../../components/BreadCamps/BreadCamps";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import CardItems from "../../components/CardItems/CardItems";
import { MainContent, MainWrapper } from "./Main.styled";

const stateMetr = ["50-100", "100-150", "150-200", "250-300", "свыше 300"]
const state = ["меринос", "кашемир", "ангора", "лама", "вискоза", "мохер", "як", "люрекс"]

const data = [
    stateMetr,
    state,
    ['метраж', 'состав']
]

const Main: FC = () => {
    return (
        <MainWrapper>
            <FilterBlock localData={data} />
            <MainContent>
                <BreadCamps />
                <CardItems />
            </MainContent>
        </MainWrapper>
    )
}

export default Main;