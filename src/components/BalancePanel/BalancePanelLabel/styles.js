import styled from 'styled-components/native';
import Color from '../../Core/Styles/Colors';

export const Container = styled.View`
    /* flex: 1; */
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 13px;
    color: ${Color.white};
`;

export const Description = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: ${Color.white};
`;
