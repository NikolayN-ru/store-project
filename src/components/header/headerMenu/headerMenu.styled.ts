import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";


export const HeaderMenuWrapper = styled('ul')`
  & {
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    color: white;
    gap: 20px;
    cursor: pointer;
    /* padding: 0 20px; */
    /* border-right: 2px solid #fff; */
    /* border-left: 2px solid #fff; */
    align-items: center;
  }
`

interface Props {
  select: boolean
}


export const HeaderMenuItem = styled('li')<Props>`
  & {
    ${props => {
      if (props.select) {
        return css`
          a {
            color: red !important;
          }

          background-color: black;
        `
      }

      return ''
    }}
    
  }
`


const CustomLink = styled(Link)<Props>`
  & {
    padding: 10px;
    text-decoration: none;
    color: #555555;
    border-radius: 5px;
    font-size: 20px;
  }
  
  &:hover {
    background-color: #1f7843;
    color: white;
  }
`