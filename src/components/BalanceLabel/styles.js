import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../Core/Styles/Colors';

export const Container = styled.View`
    align-items: center;
    padding: 20px;
    /* flex: 1; */
`;

export const Title = styled.Text`
    font-size: 14px;
    color: ${Colors.white};
`;

export const Description = styled.Text`
    font-size: 28px;
    color: ${Colors.white};
`;

export const BackgroundGradient = styled(LinearGradient).attrs({
    colors: [Colors.violet, Colors.blue],
})`
    border-radius: 10px;
    padding: 10px 30px;
    margin-top: 10px;
`;
