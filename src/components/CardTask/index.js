import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Button from '../Button';

const CardTask = (props) => {
    return (                       
        <View style={styles.cardContainer}>
            <View style={styles.cardTask}>
                <Text>{props.taskname}</Text>
            </View>
            <Button title="Remover" onPress={() => props.removeTask(props.taskname)} color={'#f00'}/>
        </View>
    );
}

export default CardTask;
