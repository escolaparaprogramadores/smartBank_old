import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Color from '../Core/Styles/Colors';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 13px;
    color: #999;
`;

export const Description = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: #333;
`;

export const Button = styled(RectButton)`
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    background: ${Color.green};
    border-radius: 150px;
    height: 50px;
    width: 50px;
    margin-top: -25px;
    margin-right: 10px;
    elevation: 24;
`;
