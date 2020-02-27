import { AsyncStorage } from 'react-native';
import apisauce from 'apisauce';

const api = apisauce.create({
    baseURL: 'https://etrip-heroku.herokuapp.com',
});

api.addAsyncRequestTransform(request => async () => {
    const token = await AsyncStorage.getItem('@Etrip:token');

    if (token) request.headers[' Authorization '] = `Bearer ${token}`;
});

api.addResponseTransform(response => {
    if (response.data.statusCode === '401') throw response;
});

export default api;
