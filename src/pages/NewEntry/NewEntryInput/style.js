import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Color from '../../../components/Core/Styles/Colors';

export const Container = styled.View`
    /* flex: 2;
    background: ${Color.asphalt};
    border-style: solid;
    border-width: 1px;
    border-color: 'rgba(255, 255, 255, 0.2)';
    justify-content: center;
    border-radius: 5px;
    margin: 5px;
    elevation: 24;
    padding: 8px; */
    flex-direction: row;
    background-color: ${Color.asphalt};
    margin: 10px 20px;
    border-radius: 15px;
`;
export const Content = styled.View`
    flex: 1;
    max-height: 400px;
    z-index: 5;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderDescription = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;
export const FooterDescription = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

export const CardContent = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`;

export const Title = styled.Text`
    font-size: 28px;
    color: #fff;
    margin-left: 5px;
    min-width: 8px;
`;

export const Description = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: #333;
`;

export const CardFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;

    border-radius: 4px;
`;

export const Annotation = styled.Text`
    font-size: 12px;
    color: #333;
`;

export const TextInput = styled(TextInputMask)`
    font-size: 28px;
    color: ${Color.white};
    text-align: right;
    padding-right: 20px;
    flex: 1;
`;
export const Touchable = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    padding: 0 20px 0 20px;
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
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 12;
    }
    shadow-opacity: 0.59;
    shadow-radius: 16.49;

    elevation: 24;
`;