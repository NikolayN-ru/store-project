import styled from 'styled-components';

export const FilterBlockWrapper = styled('div')`
& {
    width: 300px;
    display: flex;
    flex-direction: column;
    /* background-color: #919; */
    margin-left: 60px;

}
`

export const HeaderBlock = styled('h2')`
& {
    color: 424242;
    font-size: 16px;
    margin-top: 20px;
}
`

export const FilterCoast = styled('div')`
& {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #BDBDBD;
}
`

export const Input = styled('input')`
& {
    type: range;
    
}
`

export const FilterCompound = styled('div')`
& {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #BDBDBD;
}
`

export const InputCheckbox = styled('input')`
& {
    /* type: checkbox; */
}
`