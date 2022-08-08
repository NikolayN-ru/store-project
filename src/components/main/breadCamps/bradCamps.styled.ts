import styled from 'styled-components';

export const BreadCampsWrapper = styled('div')`
& {
    width: 300px;
    display: flex;
    margin-left: 60px;
    margin-bottom: 30px;
    color: #555555;
}
`

export const BreadCampsLink = styled('div')`
&{
    margin-right: 5px;
}
&:hover {
    cursor: pointer;
    color: black;
}
`