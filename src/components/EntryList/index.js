import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import Content from '../Core/Content';
import { getEntries } from '../../services/Entries';
import EntryListItem from './EntryListItem';

const EntryList = () => {
    const [entries, setEntries] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function loadEntries() {
            const data = await getEntries();
            setEntries(data);
        }
        loadEntries();
        console.log('EntryListItem :: useEffect');
    }, []);

    return (
        <Content
            headerTitle="Últimos lançamentos"
            footerTitle="Últimos 7 dias"
            details="ver mais"
            onPressActionButton={() => navigation.navigate('Report')}
        >
            <FlatList
                data={entries}

                renderItem={({ item, index }) => (
                    <EntryListItem
                        entry={item}
                        isFirstItem={index === 0}
                        isLastItem={index === entries.length - 1}
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
