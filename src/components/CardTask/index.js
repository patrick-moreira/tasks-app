import React from 'react';
import { 
    CardContainer, 
    CardContent, 
    CardTaskName, 
    TaskName, 
    TaskDescription,
    Date, 
    TaskDate } from './styles';

import Button from '../Button';

const CardTask = (props) => {
    return (                       
        <CardContainer>
            <CardContent>
                <CardTaskName>
                    <TaskName>{props.nametask.name}</TaskName>
                    <TaskDescription>{props.nametask.description}</TaskDescription>
                </CardTaskName>
                <Date>
                    <TaskDate>{props.nametask.date}</TaskDate>
                </Date>
            </CardContent>
            <Button title='X' onPress={() => props.removeTask(props.nametask)} color={'#f00'} border={30}/>
        </CardContainer>
    );
}

export default CardTask;
