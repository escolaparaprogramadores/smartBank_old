import React from 'react';
import { Text, FlatList } from 'react-native';
import { Container, Title } from './styles';

export default function EntryListItem() {
    return (
        <Container>
            <Title>Últimos Lançamentos</Title>
            <FlatList
                data={[
                    { key: 'paradaria Asa Branca: R$10' },
                    { key: 'Supermercado Isadora: R$190' },
                    { key: 'Posto Ipiranga: R$110' },
                ]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
        </Container>
    );
}
