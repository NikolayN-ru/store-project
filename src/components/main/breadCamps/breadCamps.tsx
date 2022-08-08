import React, { FC } from "react"
import { BreadCampsLink, BreadCampsWrapper } from "./bradCamps.styled";



const BreadCamps: FC = () => {
    return (
        <BreadCampsWrapper>
            <BreadCampsLink>
                / BreadCamps
            </BreadCampsLink>
            <BreadCampsLink>
                / mock
            </BreadCampsLink>
            <BreadCampsLink>
                / Data[1]
            </BreadCampsLink>
        </BreadCampsWrapper>
    )
}

export default BreadCamps;