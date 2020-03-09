import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Container, Button } from './styles';
import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';
import useBalance from '../../hooks/useBalance';

const BalancePanel = () => {
    const [balance] = useBalance();

    const navigation = useNavigation();

    return (
        <>
            <Container>
                <BalancePanelLabel currencyBalance={balance} />
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
