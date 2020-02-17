import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Input, SubmitButton, Form } from './styles';
import BalanceLabel from '../../components/BalanceLabel';

export default function Main() {
    return (
        <Container>
            <BalanceLabel />

            <Form>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Nova entrada"
                />
                <SubmitButton>
                    <Icon name="add" size={29} color="#FFF" />
                </SubmitButton>
                <SubmitButton>
                    <Icon name="remove" size={29} color="#FFF" />
                </SubmitButton>
            </Form>

            <Form>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Nova entrada"
                />
            </Form>

            <SubmitButton>
                <Icon name="location-on" size={40} color="#FFF" />
            </SubmitButton>
            <SubmitButton>
                <Icon name="camera" size={40} color="#FFF" />
            </SubmitButton>
        </Container>
    );
}
