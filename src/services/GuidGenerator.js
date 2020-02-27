export const GuidGenerator = () => {
    const uuid = require('react-native-uuid');
    return uuid.v1();
};
