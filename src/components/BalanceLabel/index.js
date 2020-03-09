import React from 'react';
import { BackgroundGradient, Container, Description, Title } from './styles';
import Currency from '../Core/Currency';
import useBalance from '../../hooks/useBalance';

const BalanceLabel = () => {
    const [balance] = useBalance();
    return (
        <Container>
            <Title>Saldo Atual</Title>
            <BackgroundGradient>
                <Description>
                    <Currency value={balance} />
                </Description>
            </BackgroundGradient>
        </Container>
    );
};
export default BalanceLabel;
