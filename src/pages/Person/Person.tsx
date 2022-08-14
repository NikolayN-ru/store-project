import React, { FC } from 'react';
import { Block1, Block2, ButtonSelect, Line, PersonWrapper } from './Person.styled';

const Person: FC = () => {

    return (
        <PersonWrapper>
            Person-Page
            metrics

            <Line>
                <Block1>1111</Block1>
                <Block2>2222</Block2>
            </Line>

            <button onClick={() => { }}>+</button>
            <button onClick={() => { }}>-</button>

            <ButtonSelect>mack-data</ButtonSelect>
            <ButtonSelect>mack-data</ButtonSelect>
            <ButtonSelect>mack-data</ButtonSelect>
            <ButtonSelect>mack-data</ButtonSelect>
        </PersonWrapper>
    )
}
export default Person;
