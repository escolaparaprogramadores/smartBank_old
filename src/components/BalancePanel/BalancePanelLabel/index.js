import React from 'react';
import { Container, Title, Description } from './styles';
import Currency from '../../Core/Currency';

export default function BalancePanelLabel({ currencyBalance }) {
    return (
        <Container>
            <Title> Saldo atual </Title>
            <Description>
                <Currency value={currencyBalance} />
            </Description>
        </Container>
    );
}
