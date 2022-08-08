import styled from 'styled-components';

export const ItemWrapper = styled('div')`
& {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 40px;
}
`

export const PhotoWrapper = styled('div')`
& {
    max-width: 500px;
}
`

export const PhotoMain = styled('img')`
& {
    height: 200px;
    /* max-width: 500px; */
}
`
export const WrapperPhotoPet = styled('div')`
& {
}
`

export const PhotoPet = styled('img')`
& {
    /* width: 100px; */
    /* height: 100px; */
}
`

// DESCRIPTION
export const DescriptionWrapper = styled('div')`
& {
    border-left: 1px solid #555;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
`

export const DescriptionTitle = styled('div')`
& {
    color: #555;
    font-size: 24px;
    padding-left: 30px;
}
`

export const DescriptionMain = styled('div')`
& {
    max-width: 400px;
    color: #555;
    font-size: 16px;
    padding-left: 30px;
    opacity: 0.8;
}
`

export const DescriptionPrice = styled('div')`
& {
    max-width: 400px;
    color: #555;
    font-size: 20px;
    padding-left: 30px;
    opacity: 0.8;
}
`