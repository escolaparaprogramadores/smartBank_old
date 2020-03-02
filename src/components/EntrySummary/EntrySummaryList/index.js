import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import EntrySummaryListItem from './EntrySummaryListItem';
import { Container } from './styles';

const EntrySummaryList = ({ data }) => {
    return (
        <Container>
            <FlatList
                style={styles.container}
                data={data}
                keyExtractor={item => item.category.id}
                renderItem={({ item }) => <EntrySummaryListItem entry={item} />}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
});

export default EntrySummaryList;
