import React from 'react';
import { BackgroundGradient, Container, Description, Title } from './styles';
import Currency from '../Core/Currency';

const BalanceLabel = () => {
    const currentBalance = 2065.35;
    return (
        <Container>
            <Title>Saldo Atual</Title>
            <BackgroundGradient>
                <Description>
                    <Currency value={currentBalance} />
                </Description>
            </BackgroundGradient>
        </Container>
    );
};
export default BalanceLabel;
