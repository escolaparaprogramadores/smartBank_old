import React from 'react';
import { Container } from './styles';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import { Background } from '../../components/Core/Backgrounds';

export default function Main() {
    return (
        <Background>
            <Container>
                <BalancePanel />
                <EntrySummary />
                <EntryList />
            </Container>
        </Background>
    );
}
