import React, { FC } from "react"
import { FilterBlockWrapper, FilterCoast, FilterCompound, HeaderBlock, Input, InputCheckbox } from "./filterBlock.styled";

const state = ["меринос", "кашемир", "ангора", "лама", "вискоза", "мохер", "як", "люрекс"]

const FilterBlock: FC = () => {
    return (
        <FilterBlockWrapper>

            Filter-block

            <FilterCoast>
                <HeaderBlock>
                    Стоимость
                </HeaderBlock>
                <Input />
            </FilterCoast>

            <FilterCompound>
                <HeaderBlock>
                    По составу
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