import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../Core/Styles/Colors';

export const Container = styled.View`
    flex-direction: row;
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
    padding: 0 30px;
    justify-content: center;
`;

export const Title = styled.Text``;

export const Value = styled.View`
    justify-content: center;
`;
export const ValueText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${Color.white};
`;

export const Bullet = styled.View``;

export const Description = styled.View`
    flex: 1;
    justify-content: center;
`;
export const DescriptionFooter = styled.View`
    flex-direction: row;
    margin-top: 2px;
`;
export const DescriptionText = styled.Text`
    font-size: 14px;
    color: ${Color.white};
`;
export const DescriptionTextFooter = styled.Text`
    font-size: 9px;
    color: ${Color.metal};
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

export const IconAccessTime = styled(Icon)`
    margin-left: 0px;
    font-size: 12px;
    color: ${Color.metal};
`;
export const IconPlace = styled(Icon)`
    margin-left: 5px;
    font-size: 12px;
    color: ${Color.metal};
`;
