import React from 'react';
import { FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from './styles';

export default function EntrySummaryList({ entriesGrouped }) {
    return (
        <Container>
            <FlatList
                data={entriesGrouped}
                renderItem={({ item }) => (
                    <Text>
                        <Icon name={item.icon} size={17} color={item.color} />
                        {item.description} - {item.amount}
                    </Text>
                )}
            />
        </Container>
    );
}
