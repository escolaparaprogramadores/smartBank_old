import { Alert } from 'react-native';
import { getRealm } from './Realm';
import { GuidGenerator } from './GuidGenerator';
import moment from '../vendors/moment';

export const getEntries = async (days, category) => {
    let realm = await getRealm();
    realm = realm.objects('Entry');

    if (days > 0) {
        const date = moment()
            .subtract(days, 'days')
            .toDate();

        realm = realm.filtered('entryAt >= $0', date);
    }

    if (category && category.id) {
        console.log('getEntries :: category ', JSON.stringify(category));
        realm = realm.filtered('category == $0', category);
    }

    const entries = realm.sorted('entryAt', true);

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
                entryAt: entry.entryAt || new Date(),
                isInit: false,
                category: entry.category,
                address: entry.address,
                photo: entry.photo,
                latitude: entry.latitude,
                longitude: entry.longitude,
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
