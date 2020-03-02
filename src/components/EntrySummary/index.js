import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import EntrySummaryChart from './EntrySummaryChart/index';
import EntrySummaryList from './EntrySummaryList/index';
import Content from '../Core/Content/index';
import { CardContent } from './styles';
import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory';

const EntrySummary = ({ days = 7 }) => {
    const [balanceSum] = useBalanceSumByCategory(days);
    const navigation = useNavigation();
    return (
        <Content
            headerTitle="Categorias"
            footerTitle={`Últimos ${days} dias`}
            details="Ver mais"
            onPressActionButton={() => navigation.navigate('Report')}
        >
            <CardContent>
                <View>
                    <EntrySummaryChart data={balanceSum} />
                </View>
                <View>
                    <EntrySummaryList data={balanceSum} />
                </View>
            </CardContent>
        </Content>
    );
};

export default EntrySummary;
