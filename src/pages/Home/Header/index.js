import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { Container, Top, Logo, Title } from './stylesHeader';
import logo from '../../../assets/Btg_Logo.png';

export default function Header() {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                {/* <Title>Mark</Title> */}
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    );
}
