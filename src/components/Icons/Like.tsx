import React from "react";
import { FC } from "react";

export const LikeIcon: FC<{ isSelected?: boolean, size?: number }> = ({ isSelected, size = 20 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
            width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
            <path
                fill={isSelected ? 'red' : 'none'}
                stroke={isSelected ? 'red' : "#000"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
            />
        </svg>
    )
} 
