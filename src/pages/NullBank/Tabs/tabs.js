import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './stylesTabs';

const Tabs = ({ onNavigattionMain }) => {
    return (
        <Container>
            <TabsContainer>
                <TouchableOpacity onPress={onNavigattionMain}>
                    <TabItem>
                        <Icon name="person-add" size={24} color="#FFF" />
                        <TabText>Trilha de Auditoria</TabText>
                    </TabItem>
                </TouchableOpacity>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF" />
                    <TabText>Gerar Lote Contábil</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#FFF" />
                    <TabText>Relatórios Parciais</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#FFF" />
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color="#FFF" />
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
};

export default Tabs;
