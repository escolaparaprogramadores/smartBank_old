import React from 'react';
// import { ScrollView } from 'react-native';
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
                {/* <ScrollView> */}
                <EntryList />
                {/* </ScrollView> */}
            </Container>
        </Background>
    );
}
