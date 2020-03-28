import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Tts from 'react-native-tts';
import ActionFooter, {
    ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';

import useCategories from '../../hooks/useCategories';
import { saveEntry } from '../../services/Entries';
import { setInitialized } from '../../services/Welcome';
import Colors from '../../components/Core/Styles/Colors';
import Logo from '../../assets/logo-white.png';

const Welcome = ({ navigation }) => {
    const [, , , initCategories] = useCategories();
    const [amount, setAmount] = useState(0);
    const [message] = useState(
        'Para começar, você precisa informar, o saldo atual. Informe seu saldo.'
    );

    useEffect(() => {
        async function onInit() {
            Tts.getInitStatus().then(() => {
                Tts.speak(message, Tts.stop());
            });
        }
        onInit();
    }, []);

    const onSavePress = () => {
        saveEntry({
            amount: parseFloat(amount),
            isInit: true,
            category: initCategories,
        });
        setInitialized();
        navigation.navigate('Smart Bank 1.0');
    };
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={Logo} />
            </View>
            <WelcomeMessage />
            <WelcomeBalanceInput value={amount} onChangeValue={setAmount} />
            <ActionFooter>
                <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
            </ActionFooter>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
    },
    logo: {
        alignItems: 'center',
        marginTop: 20,
    },
});

export default Welcome;
