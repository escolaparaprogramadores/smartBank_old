import { Alert } from 'react-native';
import { getRealm } from './Realm';
import { GuidGenerator } from './GuidGenerator';

export const getEntries = async () => {
    const realm = await getRealm();
    const entries = realm.objects('Entry').sorted('entryAt', true);

    console.log('getEntries :: entries ', JSON.stringify(entries));

    return entries;
};

export const saveEntry = async entry => {
    const realm = await getRealm();
    let data = {};

    try {
        realm.write(() => {
            data = {
                id: entry.id || GuidGenerator(),
                amount: entry.amount,
                description: entry.description,
                entryAt: entry.entryAt,
                isInit: false,
                category: entry.category,
            };

            realm.create('Entry', data, true);
        });

        console.log('saveEntry :: data: ', JSON.stringify(data));
    } catch (error) {
        console.error(
            'saveEntry :: error on save object: ',
            JSON.stringify(data)
        );
        Alert.alert('Erro ao salvar os dados de lançamento.');
    }

    return data;
};

export const deleteEntry = async entry => {
    const realm = await getRealm();
    try {
        realm.write(() => {
            const obj = realm.objects('Entry').filtered('id = $0', entry.id);
            realm.delete(obj);
        });
    } catch (error) {
        console.error(
            'deleteEntry :: error on delete object: ',
            JSON.stringify(entry)
        );
        Alert.alert('Erro ao excluir este lançamento.');
    }
};
