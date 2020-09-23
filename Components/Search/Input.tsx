import React from 'react';
import { TextInput } from 'react-native';
import styles from './Styles/InputStyle';

const Input: any = props => {
    return (
        <TextInput {...props} style={{ ...styles.input, ...props.style }}></TextInput>
    )

}



export default Input;