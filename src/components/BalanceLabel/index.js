import React from 'react';
import { Container, Value, Label } from './styles';

const BalanceLabel = ({ currenctBalance }) => {
    return (
        <Container>
            <Label>Saldo Atual</Label>
            <Value>{currenctBalance}</Value>
        </Container>
    );
};
export default BalanceLabel;
