import React from 'react';
import { FlatList, Text } from 'react-native';
import { Container, TitlePrincipal } from './styles';

export default function EntrySummaryList() {
    return (
        <Container>
            <TitlePrincipal> Categoria </TitlePrincipal>
            <FlatList
                data={[
                    { key: 'Alimentação: R$200' },
                    { key: 'Combustivel: R$12' },
                    { key: 'Aluguel: R$120' },
                    { key: 'Lazer: R$250' },
                    { key: 'Outros: R$1200' },
                ]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
        </Container>
    );
}
