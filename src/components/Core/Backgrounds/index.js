import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import Color from '../Styles/Colors';

export const Background = styled(LinearGradient).attrs({
    colors: ['#25384a', '#25384a'],
    // colors: ['#0a4fe8', '#0a4fe8'],
})`
    flex: 1;
`;

export const HeadBackground = styled(LinearGradient).attrs({
    colors: [Color.violet, Color.blue],
})`
    flex: 1;
`;
