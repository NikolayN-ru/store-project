import React, { FC } from "react";
import { useParams } from "react-router";
import { DescriptionMain, DescriptionPrice, DescriptionTitle, DescriptionWrapper, ItemWrapper, PhotoMain, PhotoPet, PhotoWrapper, WrapperPhotoPet } from "./item.styled";
import image from '../../assets/image.png';

const Item: FC = () => {

    const { itemId } = useParams();

    return (
        <ItemWrapper>
            <PhotoWrapper>
                {/* <PhotoMain src='image.png' /> */}
                <PhotoMain src={image} />
                <WrapperPhotoPet>
                    <PhotoPet src='image.png' />
                    <PhotoPet src='image.png' />
                    <PhotoPet src='image.png' />
                </WrapperPhotoPet>
            </PhotoWrapper>
            <DescriptionWrapper>
                <DescriptionTitle>
                    Mafil kajal || link Id - {itemId}
                </DescriptionTitle>
                <DescriptionMain>
                    Мета тег description (мета-описание, «дескрипшн») предназначен для создания краткого описания html-страницы. Его содержимое может использоваться поисковыми системами для формирования сниппета. Данный тег не влияет на внешний вид страницы, так как является служебной информацией
                </DescriptionMain>
                <DescriptionPrice>
                    555 y.e.
                </DescriptionPrice>
            </DescriptionWrapper>
        </ItemWrapper>
    )
}

export default Item;
