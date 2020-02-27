import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Button } from './styles';
import { HeadBackground } from '../Core/Backgrounds';
import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';

const BalancePanel = ({ onNewEntryPress }) => {
    const currenctBalance = 'R$13.497,32';

    return (
        <>
            <HeadBackground>
                <Container>
                    <BalancePanelLabel currenctBalance={currenctBalance} />
                    <BalancePanelChart />
                </Container>
            </HeadBackground>
            <TouchableOpacity onPress={onNewEntryPress}>
                <Button>
                    <Icon name="replay" size={30} color="#FFF" />
                </Button>
            </TouchableOpacity>
        </>
    );
};

export default BalancePanel;
