import React, { FC } from "react"
import { FilterBlockWrapper, FilterCoast, FilterCompound, HeaderBlock, Input, InputCheckbox } from "./filterBlock.styled";

const state = ["меринос", "кашемир", "ангора", "лама", "вискоза", "мохер", "як", "люрекс"]
const stateMetr = ["50-100", "100-150", "150-200", "250-300", "свыше 300"]

const FilterBlock: FC = () => {
    return (
        <FilterBlockWrapper>
            <HeaderBlock>
                фильтр по пряже:
            </HeaderBlock>
            <FilterCoast>
                <HeaderBlock>
                    Стоимость:
                </HeaderBlock>
                <Input />
            </FilterCoast>

            <FilterCoast>
                <HeaderBlock>
                    Метраж:
                </HeaderBlock>
                {stateMetr.map((item, id) => {
                    return (
                        <InputCheckbox key={id} placeholder={item} />
                    )
                })}
            </FilterCoast>

            <FilterCompound>
                <HeaderBlock>
                    По составу:
                </HeaderBlock>
                {state.map((item, id) => {
                    return (
                        <InputCheckbox key={id} placeholder={item} />
                    )
                })}
            </FilterCompound>
        </FilterBlockWrapper>
    )
}

export default FilterBlock;


// по Производителю