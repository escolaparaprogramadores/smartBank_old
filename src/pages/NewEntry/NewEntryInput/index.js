import React, { useState } from 'react';
import InputMoney from '../../../components/Core/InputMoney/index';

const NewEntryInput = ({ value, onChangeDebit, onChangeValue }) => {
    return (
        <InputMoney
            value={value}
            onChangeDebit={onChangeDebit}
            onChangeValue={onChangeValue}
        />
    );
};

export default NewEntryInput;
