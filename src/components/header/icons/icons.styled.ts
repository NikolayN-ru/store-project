import styled from 'styled-components';

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
    width: 180px;
    height: 50px;
    background-color: #1f7843;
    position: absolute;
    opacity: ${(({ disp }) => disp ? '1' : '0')};
    bottom: ${(({ disp }) => disp ? '-50px' : '-80px')};
    right: -25px;
    display: ${(({ disp }) => disp ? 'block' : 'none')};
    transition: all 0.3s;
    border-radius: 30px;
    padding-left: 40px;
    padding-top: 15px;
    box-sizing: border-box;
}
&:hover {
    display:block;
}
`

export const UserIcomenuText = styled('span')`
& {
    color: white;
}
&:hover {
    opacity: 0.5;
}
`
