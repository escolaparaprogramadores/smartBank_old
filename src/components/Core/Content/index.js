import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    Title,
    CardHeader,
    CardFooter,
    FooterDescription,
} from './styles';

const Content = ({
    children,
    headerTitle,
    footerTitle,
    details,
    onPressActionButton,
}) => {
    return (
        <Container>
            {headerTitle && (
                <CardHeader>
                    <Title> {headerTitle} </Title>
                </CardHeader>
            )}
            {children}
            {(footerTitle || onPressActionButton) && (
                <CardFooter>
                    {footerTitle && <Title> {footerTitle} </Title>}
                    <TouchableOpacity onPress={onPressActionButton}>
                        {details && (
                            <FooterDescription>
                                <Icon
                                    name="insert-chart"
                                    size={25}
                                    color="#FFF"
                                />
                                <Title> {details} </Title>
                            </FooterDescription>
                        )}
                    </TouchableOpacity>
                </CardFooter>
            )}
        </Container>
    );
};

export default Content;
