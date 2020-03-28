import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../components/Core/Styles/Colors';

const WelcomeMessage = () => {
    const [message] = useState(
        'Para começar, você precisa informar, o saldo atual. Informe seu saldo!'
    );
    return (
        <View>
            <Text style={styles.title}>Olá!</Text>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: Colors.white,
        fontSize: 28,
        textAlign: 'center',
        marginTop: 20,
    },
    message: {
        color: Colors.white,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 40,
    },
});

export default WelcomeMessage;
