import React from 'react';
import { Container, Value, Label } from './styles';

export default function BalanceLabel() {
    return (
        <Container>
            <Label>Saldo Atual</Label>
            <Value>R$6.500,00</Value>
        </Container>
    );
}
