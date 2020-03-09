import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import Content from '../Core/Content';
import { getEntries } from '../../services/Entries';
import EntryListItem from './EntryListItem';

const EntryList = ({ days = 7, category }) => {
    const [entries, setEntries] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        console.log('EntryListItem :: useEffect', category);
        async function loadEntries() {
            const data = await getEntries(days, category);
            setEntries(data);
        }
        loadEntries();

    }, [days, category]);

    return (
        <Content
            headerTitle="Últimos lançamentos"
            footerTitle={`${
                days === 1 ? `${`Ontem`}` : `${`Últimos ${days} dias`}`
            }`}
            details="ver mais"
            onPressActionButton={() => navigation.navigate('Report')}
        >
            <FlatList
                data={entries}
                renderItem={({ item, index }) => (
                    <EntryListItem
                        entry={item}
                        isLastItem={index === entries.length - 1}
                        isFirstItem={index === 0}
                        onPress={entry => {
                            const entryToJson = JSON.parse(
                                JSON.stringify(entry)
                            );
                            navigation.navigate('NewEntry', {
                                entry: entryToJson,
                            });
                        }}
                    />
                )}
            />
        </Content>
    );
};

export default EntryList;
