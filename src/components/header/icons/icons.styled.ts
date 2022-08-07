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
    width: 200px;
    height: 50px;
    background-color: #12BC51;
    position: absolute;
    opacity: ${(({ disp }) => disp ? '1' : '0')};
    bottom: ${(({ disp }) => disp ? '-50px' : '-80px')};
    right: 0;
    display: ${(({ disp }) => disp ? 'block' : 'none')};
    transition: all 0.3s;

}
&:hover {
    display:block;
}
`