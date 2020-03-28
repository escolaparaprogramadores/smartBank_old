import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container } from './styles';
import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from './NewEntryInput/index';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryCameraPicker from './NewEntryCameraPicker';
import NewEntryAddressPicker from './NewEntryAddressPicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';
import Colors from '../../components/Core/Styles/Colors';
import ActionFooter, {
    ActionPrimaryButton,
    ActionSecondaryButton,
} from '../../components/Core/ActionFooter';
import useEntries from '../../hooks/useEntries';

const NewEntry = ({ navigation, route }) => {
    const { entry } = route.params;
    console.log('ENTRY :: entries ', JSON.stringify(entry));

    const [, saveEntry, deleteEntry] = useEntries();

    const [debit, setDebit] = useState(entry.amount <= 0);
    const [amount, setAmount] = useState(entry.amount);
    const [category, setCategory] = useState(entry.category);
    const [address, setAddress] = useState(entry.address);
    const [photo, setPhoto] = useState(entry.photo);
    const [latitude, setLatitude] = useState(entry.latitude);
    const [longitude, setLongitude] = useState(entry.longitude);
    const [entryAt, setEntryAt] = useState(
        entry.entryAt ? new Date(entry.entryAt) : new Date()
    );
    useEffect(() => {
        const load = async () => {
            setLongitude(entry.longitude);
            setLatitude(entry.latitude);
            setAddress(entry.address);
            setPhoto(entry.photo);
            setCategory(entry.category);
            setDebit(entry.amount <= 0);
            setAmount(entry.amount);
            setEntryAt(entry.entryAt ? new Date(entry.entryAt) : new Date());
        };
        load();
    }, [entry]);

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
            photo,
            address,
            latitude,
            longitude,
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
                    <NewEntryCameraPicker
                        photo={photo}
                        onChangePhoto={setPhoto}
                    />
                    <NewEntryAddressPicker
                        address={address}
                        onChange={({ latitude, longitude, address }) => {
                            setLatitude(latitude);
                            setLongitude(longitude);
                            setAddress(address);
                        }}
                    />
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
