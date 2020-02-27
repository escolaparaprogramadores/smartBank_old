import React from 'react';
import { Container } from './styles';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import { Background } from '../../components/Core/Backgrounds';

export default function Main({ navigation }) {
    return (
        <Background>
            <Container>
                <BalancePanel
                    onNewEntryPress={() => navigation.navigate('NewEntry')}
                />
                <EntrySummary
                    onPressActionButton={() => navigation.navigate('Report')}
                />
                <EntryList
                    onPress={entry =>
                        navigation.navigate('NewEntry', {
                            entry: entry,
                        })
                    }
                    onPressActionButton={() => navigation.navigate('Report')}
                />
            </Container>
        </Background>
    );
}
