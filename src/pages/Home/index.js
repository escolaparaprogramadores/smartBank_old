import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from './Header/index';
import {
    Container,
    Content,
    Card,
    CardHeader,
    CardFooter,
    Annotation,
    CardContent,
    Description,
    Title,
} from './styles';
import Tabs from './Tabs/tabs';
import { Background } from '../../components/Core/Backgrounds';

export default function Main({ navigation }) {
    return (
        <Background>
            <Container>
                <Header />
                <Content>
                    <Card>
                        <CardHeader>
                            <Icon name="attach-money" size={28} color="#666" />
                            <Icon
                                name="visibility-off"
                                size={28}
                                color="#666"
                            />
                        </CardHeader>
                        <CardContent>
                            <Title>Saldo disponível</Title>
                            <Description>R$ 197.611,65</Description>
                        </CardContent>
                        <CardFooter>
                            <Annotation>
                                Transferência de R$ 20,00 recebida de Diego
                                Schell Fernandes hoje às 06:00h
                            </Annotation>
                        </CardFooter>
                    </Card>
                </Content>
                <Tabs onNavigattionMain={() => navigation.navigate('Main')} />
            </Container>
        </Background>
    );
}
