import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { Container, Input } from './styles';
import BalanceLabel from '../../components/BalanceLabel';
import { saveEntry, deleteEntry } from '../../services/Entries';
import NewEntryInput from './NewEntryInput/index';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';

const NewEntry = ({ route, navigation }) => {
    const entry = route.params?.entry
        ? route.params.entry
        : {
              id: null,
              amount: 0,
              category: { id: null, name: 'Selecione' },
              description: '',
              // entryAt: new Date(),
          };

    const [category, setCategory] = useState(entry.category);
    const [debit, setDebit] = useState(entry.amount <= 0);
    const [amount, setAmount] = useState(`${entry.amount}`);
    const [entryAt, setEntryAt] = useState(
        entry.entryAt ? new Date(entry.entryAt) : new Date()
    );

    const isValid = () => {
        if (parseFloat(amount) !== 0) {
            return true;
        }

        return false;
    };

    const onClose = () => {
        navigation.goBack();
    };

    const onSave = () => {
        const data = {
            id: entry.id,
            amount: parseFloat(amount),
            category : category,
            entryAt: entryAt,
        };
        console.log('NewEntry :: save ', data);
        saveEntry(data);
        onClose();
    };

    const onDelete = () => {
        deleteEntry(entry);
        onClose();
    };

    return (
        <Container>
            <BalanceLabel />
            <View>
                <NewEntryInput
                    value={amount}
                    onChangeValue={setAmount}
                    onChangeDebit={setDebit}
                />
                <NewEntryCategoryPicker
                    debit={debit}
                    category={category}
                    onChangeCategory={setCategory}
                />
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
