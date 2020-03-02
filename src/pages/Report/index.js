import React from 'react';
import { Picker, View, Button } from 'react-native';
import { Container } from './styles';
import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import { Background } from '../../components/Core/Backgrounds';

export default function Report() {

    const entries = [
        { key: '1', description: 'paradaria Asa Branca', amount: '10' },
        { key: '2', description: 'Supermercado Isadora', amount: '190' },
        { key: '3', description: 'Posto Ipiranga', amount: '110' },
    ];
    const entriesGrouped = [
        { key: '1', description: 'Alimentação', amount: '201' },
        { key: '2', description: 'Combustivel', amount: '12' },
        { key: '3', description: 'Aluguel', amount: '110' },
        { key: '4', description: 'Lazer', amount: '190' },
        { key: '5', description: 'Outros', amount: '1456' },
    ];
    return (
        <Background>
            <Container>
                <BalanceLabel />
                <Picker>
                    <Picker.Item label="Todas Categorias" />
                </Picker>
                <Picker>
                    <Picker.Item label="Últimos 7 dias" />
                </Picker>
                <EntrySummary entriesGrouped={entriesGrouped} />
                <EntryList entries={entries} />
                <View>
                    <Button title="Adicionar" />
                    <Button title="Cancelar" />
                </View>
            </Container>
        </Background>
    );
}