import styled from 'styled-components';

export const InputPanelWrapper = styled('div')`
& {
    max-width: 5000px;
    /* height: 30px; */
    border: 2px solid #fff;
    border-radius: 8px;
}
`

export const Input = styled('input')`
& {
    margin-top: 5px;
    border: none;
    background-color: #7AC751;
    margin-left: 10px;
    margin-bottom: 5px;
    color: #fff;
    font-size: 20px;
}
&:focus {
    outline: none
    /* background-color: none; */
}
&::placeholder {
    color: red;
}
`