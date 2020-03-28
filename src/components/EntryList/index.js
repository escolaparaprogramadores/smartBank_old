import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native';
import Content from '../Core/Content';
import EntryListItem from './EntryListItem';
import useEntries from '../../hooks/useEntries';


const EntryList = ({ days = 7, category }) => {
    const [entries] = useState([]);
    const navigation = useNavigation();
    const [data] = useEntries(days, category);
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
                data={data}
                renderItem={({ item, index }) => (
                    <EntryListItem
                        entry={item}
                        isLastItem={index === entries.length - 1}
                        isFirstItem={index === 0}
                        onPress={entry => {
                            // const entryToJson = JSON.parse(
                            //     JSON.stringify(entry)
                            // );
                            navigation.navigate('NewEntry', {
                                entry,
                            });
                        }}
                    />
                )}
            />
        </Content>
    );
};

export default EntryList;
