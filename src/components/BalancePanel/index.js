import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Container, Button } from './styles';
import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';

const BalancePanel = () => {
    const currencyBalance = 197032;
    const navigation = useNavigation();

    return (
        <>
            <Container>
                <BalancePanelLabel currencyBalance={currencyBalance} />
                <BalancePanelChart />
            </Container>

            <TouchableOpacity onPress={() => navigation.navigate('NewEntry')}>
                <Button>
                    <Icon name="add" size={30} color="#FFF" />
                </Button>
            </TouchableOpacity>
        </>
    );
};

export default BalancePanel;
