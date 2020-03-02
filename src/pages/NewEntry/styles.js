import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Colors from '../../components/Core/Styles/Colors';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background-color: ${Colors.background};
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    height: 50px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid grey;
`;
export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #7159c1;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
`;
