import styled from 'styled-components';

export const PersonWrapper = styled('div')`
& {
    margin-top: 50px;
    background-color: #fff;
    width: min(850px);
    padding: 20px;
}
`

export const Line = styled('div')`
& {
    background-color: red;
    width: 600px;
    height: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
`

export const Block1 = styled('div')`
& {
    background-color: green;
    width: 80%;
    height: 20px;
}
`

export const Block2 = styled('div')`
& {
    background-color: blue;
width: 110%;
height: 20px;
}
`