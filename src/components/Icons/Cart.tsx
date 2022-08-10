import React from "react";
import { FC } from "react";
import { boolean } from "yup";

// export const LikeIcon: FC<{ isSelected?: boolean, size?: number }> = ({ isSelected, size = 20 }) => {
export const CartIcon: FC<{ isHover?: boolean | undefined, onMouseEnter?:any}> = ({ isHover }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true" role="img" width="32" height="32"
            preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
            <path fill={isHover ? 'black' : "#555"}
                d="M2.5 2a.5.5 0 0 0 0 1h.246a.5.5 0 0 1 .48.363l1.586 5.55A1.5 1.5 0 0 0 6.254 10h4.569a1.5 1.5 0 0 0 1.393-.943l1.474-3.686A1 1 0 0 0 12.762 4H4.448l-.261-.912A1.5 1.5 0 0 0 2.746 2H2.5Zm3.274 6.637L4.734 5h8.027l-1.474 3.686a.5.5 0 0 1-.464.314H6.254a.5.5 0 0 1-.48-.363ZM6.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm4 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z" />
        </svg>
    )
}
