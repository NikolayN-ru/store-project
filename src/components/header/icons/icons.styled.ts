import styled, {css} from 'styled-components';

export const IconsWrapper = styled('div')`
  & {
    width: 500px;
    display: flex;
    gap: 30px;
    cursor: pointer;
  }
`

export const CartIco = styled('div')`
  & {
    position: relative;
  }
`

export const CartIcoTotal = styled('div')`
  & {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    text-align: center;
    line-height: 1.3;
  }
`

export const UserIco = styled('div')`
  & {
    position: relative;
  }

  &:hover {
  }
`

export const UserIcomenu = styled('div') <{ disp?: boolean }>`
  & {
    display: block;
    width: 180px;
    height: 50px;
    background-color: #1f7843;
    position: absolute;
    bottom: ${(({disp}) => disp ? '-50px' : '-80px')};
    right: -25px;
    opacity: 0;
    visibility: ${_ => _.disp ? 'visible' : "hidden"};
    transition: opacity .3s ease-in;
    border-radius: 30px;
    padding-left: 40px;
    padding-top: 15px;
    box-sizing: border-box;
  }

  ${_ => _.disp ? css`& {
    opacity: 1
  }` : ""}
`

export const UserIcomenuText = styled('span')`
  & {
    color: white;
  }

  &:hover {
    opacity: 0.5;
  }
`
