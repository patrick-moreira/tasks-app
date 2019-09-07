import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';
import Button from '../Button';

const InputTask = (props) => {
    return(
        <View style={styles.inputContainer}>
            <View style={styles.inputTask}>
                <TextInput 
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    value={props.value}
                />
            </View>
            <Button title={props.titleButton} onPress={props.onPressButton} color={'#00f'}/>
        </View>
    );
}

export default InputTask;
