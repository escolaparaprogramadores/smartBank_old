import React from 'react';
import { View } from 'react-native';
import EntrySummaryChart from './EntrySummaryChart/index';
import EntrySummaryList from './EntrySummaryList/index';
import Content from '../Core/Content/index';
import { CardContent } from './styles';
import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory';

const EntrySummary = ({days = 7, onPressActionButton }) => {
    // const [balanceSum] = useBalanceSumByCategory(days);

    const entriesGrouped = [
        {
            key: '1',
            icon: 'desktop-windows',
            color: 'green',
            description: 'Motor Contábil',
            amount: '201',
        },
        {
            key: '2',
            icon: 'desktop-windows',
            color: 'green',
            description: 'Motor Contábil Finance',
            amount: '12',
        },
        {
            key: '3',
            icon: 'desktop-windows',
            color: 'red',
            description: 'Cadoc 3040',
            amount: '110',
        },
        {
            key: '4',
            icon: 'desktop-windows',
            color: 'green',
            description: 'PNL Report',
            amount: '190',
        },
        {
            key: '5',
            icon: 'desktop-windows',
            color: 'green',
            description: 'Outros',
            amount: '1456',
        },
    ];
    return (
        <Content
            headerTitle="Motores"
            footerTitle={`Últimos ${days} dias`}
            details="Ver mais"
            onPressActionButton={onPressActionButton}
        >
            <CardContent>
                <View>
                    {/* <EntrySummaryChart data={balanceSum} /> */}
                    <EntrySummaryChart data={entriesGrouped} />
                </View>
                <View>
                    {/* <EntrySummaryList data={balanceSum} /> */}
                    <EntrySummaryList entriesGrouped={entriesGrouped} />
                </View>
            </CardContent>
        </Content>
    );
};

export default EntrySummary;
