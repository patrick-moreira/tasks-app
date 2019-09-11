import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Container, InputContainer } from './styles'; 

import Header from '../../components/Header';
import CardTask from '../../components/CardTask';
import Button from '../../components/Button';


const Main = () => {
    const [input, setInput] = useState('');
    const [tasks, setTask] = useState(['Tarefa 1']);

    const addTask = () => {
        setTask([...tasks, input]);
        setInput('');
        //alert('Item adicionado com sucesso!');
    }
    
    const removeTask = (task) => {
        setTask(tasks.filter(item => item !== task))
        //alert('Item removido com sucesso!');
    }

    return(
        <View>
            <Header headertitle="Minhas Tarefas" />
            <Container>
                <InputContainer>         
                    <TextInput 
                        placeholder="Digite sua tarefa..."
                        onChangeText={(input) => setInput(input)}
                        value={input}  
                    />
                    <Button title="Adicionar" onPress={addTask} color={'#00f'}/>
                </InputContainer>    
                
                {tasks.map((task) => (    
                    <CardTask taskname={task} removeTask={removeTask}/>    
                ))}
            </Container>
        </View>

    );
}

export default Main;
