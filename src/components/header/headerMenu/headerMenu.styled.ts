import styled, { css } from 'styled-components';
import {Link} from "react-router-dom";


export const HeaderMenuWrapper = styled('ul')`
& {
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    color: white;
    gap: 20px;
    cursor: pointer;
    align-items: center;
}
`

interface Props {
    select: boolean;
}

export const HeaderMenuItem = styled('li') <Props>`
& {
    ${props => {
        if (props.select) {
            return css`
                a {
                    color: red !important;
                    background-color: #fff !important;
                }
                `
        }
        return ''
    }}
        a {
        padding: 10px;
        text-decoration: none;
        color: #555555;
        border-radius: 5px;
        font-size: 20px;
    }

    a:hover {
        background-color: #1f7843;
        color: white;
}
}
`
