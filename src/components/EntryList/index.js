import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Content from '../Core/Content';
import { getEntries } from '../../services/Entries';
import EntryListItem from './EntryListItem';

const EntryList = ({ onPress, onPressActionButton }) => {
    const [entries, setEntries] = useState([]);

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
            headerTitle="Trilha de Auditoria"
            footerTitle="Últimos 7 dias"
            details="ver mais"
            onPressActionButton={onPressActionButton}
        >
            <FlatList
                data={entries}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <EntryListItem
                        entry={item}
                        isFirstItem={index === 0}
                        isLastItem={index === entries.length - 1}
                        onPress={onPress}
                    />
                )}
            />
        </Content>
    );
};

export default EntryList;
