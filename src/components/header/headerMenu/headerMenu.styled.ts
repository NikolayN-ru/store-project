import styled from 'styled-components';

export const HeaderMenuWrapper = styled('ul')`
& {
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    color: white;
    gap: 20px;
    cursor: pointer;
    padding: 0 20px;
    border-right: 2px solid #fff;
    border-left: 2px solid #fff;
    align-items: center;
}
`

export const HeadeMenuItem = styled('li')`
& {
    
    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        color: red;
}
}
`
