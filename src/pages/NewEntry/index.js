import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container } from './styles';
import BalanceLabel from '../../components/BalanceLabel';
import { saveEntry, deleteEntry } from '../../services/Entries';
import NewEntryInput from './NewEntryInput/index';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';
import Colors from '../../components/Core/Styles/Colors';
import ActionFooter, {
    ActionPrimaryButton,
    ActionSecondaryButton,
} from '../../components/Core/ActionFooter';

const NewEntry = () => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log('ROUTE ::', route);
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
    const [amount, setAmount] = useState(entry.amount);
    const [entryAt, setEntryAt] = useState(
        entry.entryAt ? new Date(entry.entryAt) : new Date()
    );

    useEffect(() => {
        async function loadEntries() {
             setCategory(entry.category);
             setDebit(entry.amount <= 0);
            setAmount(entry.amount);
             setEntryAt(entry.entryAt ? new Date(entry.entryAt) : new Date());
        }
        loadEntries();
    }, [entry]);

    console.log('AMOUNT ::', amount);

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
            category,
            entryAt,
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
            <View style={styles.formContainer}>
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
                <View style={styles.formActionContainer}>
                    <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
                    <NewEntryDeleteAction onOkPress={onDelete} entry={entry} />
                </View>
            </View>

            <ActionFooter>
                <ActionPrimaryButton
                    title={entry.id ? 'Salvar' : 'Adicionar'}
                    onPress={() => {
                        isValid() && onSave();
                    }}
                />
                <ActionSecondaryButton title="Cancelar" onPress={onClose} />
            </ActionFooter>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
    },
    formContainer: {
        flex: 1,
        paddingVertical: 20,
    },
    formActionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
});

export default NewEntry;
