import React from 'react';
import { Text } from 'react-native';
import { CardContainer, CardTaskname } from './styles';
import Button from '../Button';

const CardTask = (props) => {
    return (                       
        <CardContainer>
            <CardTaskname>
                <Text>{props.taskname}</Text>
            </CardTaskname>
            <Button title='X' onPress={() => props.removeTask(props.taskname)} color={'#f00'}/>
        </CardContainer>
    );
}

export default CardTask;
