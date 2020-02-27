import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { Container, Input } from './styles';
import BalanceLabel from '../../components/BalanceLabel';
import { saveEntry, deleteEntry } from '../../services/Entries';

const NewEntry = ({ route, navigation }) => {
    const currentBalance = 2065.35;
    const entry = route.params?.entry
        ? route.params.entry
        : {
              id: null,
              amount: 0,
              description: '',
              entryAt: new Date(),
          };
    const [amount, setAmount] = useState(`${entry.amount}`);

    const isValid = () => {
        return amount > 0;
    };

    const onClose = () => {
        navigation.goBack();
    };

    const onSave = () => {
        const data = {
            amount: parseFloat(amount),
        };
        console.log('NewEntry :: save ', data);
        saveEntry(data, entry);
        onClose();
    };

    const onDelete = () => {
        deleteEntry(entry);
        onClose();
    };

    return (
        <Container>
            <BalanceLabel currentBalance={currentBalance} />
            <View>
                <Input onChangeText={text => setAmount(text)} value={amount} />
                <Input />
                <Button title="GPS" />
                <Button title="Camera" />
            </View>

            <View>
                <Button
                    title="Adicionar"
                    onPress={() => {
                        isValid() && onSave();
                    }}
                />
                <Button title="Excluir" onPress={onDelete} />
                <Button title="Cancelar" onPress={onClose} />
            </View>
        </Container>
    );
};

export default NewEntry;
