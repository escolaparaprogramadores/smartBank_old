import React from 'react';
import { Alert, FlatList, View, Button, Text } from 'react-native';

export default function App() {
    const addEntry = () => {
        const nome = ' Mark Roger';
        Alert.alert(`Meu nome é ${nome}`);
    };

    return (
        <View>
            <Text
                style={{
                    fontSize: 22,
                    marginBottom: 10,
                    fontWeight: 'bold',
                    marginTop: 10,
                }}
            >
                R$ Saldo $2.102,45
            </Text>

            <Button title="Adicionar" onPress={addEntry}>
                {' '}
            </Button>

            <Text
                style={{
                    fontSize: 22,
                    marginBottom: 10,
                    fontWeight: 'bold',
                    marginTop: 10,
                }}
            >
                Categoria
            </Text>

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

            <Text
                style={{
                    fontSize: 22,
                    marginBottom: 10,
                    fontWeight: 'bold',
                    marginTop: 10,
                }}
            >
                Últimos Lançamentos
            </Text>
            <FlatList
                data={[
                    { key: 'paradaria Asa Branca: R$10' },
                    { key: 'Supermercado Isadora: R$190' },
                    { key: 'Posto Ipiranga: R$110' },
                ]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
        </View>
    );
}
