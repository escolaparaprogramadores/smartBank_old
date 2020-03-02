import React, { useState } from 'react';
import { Container, TextInput, Touchable, Title } from './style';

const NewEntryInput = ({ value, onChangeDebit, onChangeValue }) => {
    const [debit, setDebit] = useState(value <= 0 ? -1 : 1);
    const [debitPrefix, setDebitPrefix] = useState(value <= 0 ? '-' : '');

    const onChangeDebitCredit = () => {
        if (debit < 0) {
            setDebit(1);
            setDebitPrefix('');
            onChangeDebit(false);
        } else {
            setDebit(-1);
            setDebitPrefix('-');
            onChangeDebit(true);
        }
    };

    return (
        <Container>
            <Touchable onPress={onChangeDebitCredit}>
                <Title>{debitPrefix}</Title>
                <Title>R$</Title>
            </Touchable>
            <TextInput
                type="money"
                options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: '',
                    suffixUnit: '',
                }}
                value={value}
                includeRawValueInChangeText
                onChangeText={(maskedValue, rawValue) => {
                    onChangeValue(rawValue * debit);
                }}
            />
            {/* <TextInput kind={'money'} options={{ unit: 'US$' }} /> */}
        </Container>
    );
};

export default NewEntryInput;
