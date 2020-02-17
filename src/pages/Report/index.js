import React from 'react';
import { Picker, View, Button } from 'react-native';
import { Container } from './styles';
import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

export default function Report() {
    return (
        <Container>
            <EntryLabel />
            <Picker>
                <Picker.Item label="Todas Categorias" />
            </Picker>
            <Picker>
                <Picker.Item label="Últimos 7 dias" />
            </Picker>
            <EntrySummary />
            <EntryList />
            <View>
                <Button title="Adicionar" />
                <Button title="Cancelar" />
            </View>
        </Container>
    );
}
