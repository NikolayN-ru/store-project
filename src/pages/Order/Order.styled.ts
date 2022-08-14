import styled from 'styled-components';

export const OrderWrapper = styled('div')`
& {
    width: 100%;
    background-color: #E5E5E5;
    padding: 50px;
}
`

export const ContactsData = styled('div')`
& {
    margin-top: 30px;
    padding-bottom: 30px;
}
`

export const InputOrder = styled('input')`
& {
    margin-left: 40px;    
}
`

export const TitleWrite = styled('p')`
& {
    padding-top: 50px;
}
`

export const WrapperSelect = styled('div')`
& {
    display: flex;
}
`

export const Select = styled('div')`
&{
    margin: 40px;
    width: 270px;
    height: 130px;
    background-color: #fff;
    border: 1.5px solid #fff;
}
&:hover {
    border: 1.5px solid #E30016;
}
`

export const Button = styled('button')`
& {
    width: 280px;
    height: 50px;
    background-color: #F63224;
    color: #fff;
    border: none;
    border-radius: 25px;
    margin-top: 40px;
}
&:hover {
    opacity: .6;
}
&:active {
    opacity: .3;
}
`
