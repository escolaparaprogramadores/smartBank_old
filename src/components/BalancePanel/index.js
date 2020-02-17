import React from 'react';
import { Container, Button } from './styles';
import BalancePanelChart from './BalancePanelChart/index';
import BalancePanelLabel from './BalancePanelLabel/index';

export default function BalancePanel() {
    return (
        <Container>
            <BalancePanelLabel />
            <BalancePanelChart />
            <Button title="Adicionar" />
        </Container>
    );
}
