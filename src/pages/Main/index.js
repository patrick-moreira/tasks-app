import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles'; 

import Header from '../../components/Header';
import CardTask from '../../components/CardTask';
import InputTask from '../../components/InputTask';


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
            <View style={styles.container}> 
                <InputTask 
                    placeholder="Digite sua tarefa..."
                    onChangeText={(input) => setInput(input)}
                    value={input}
                    titleButton="Adicionar" 
                    onPressButton={addTask}
                />
                
                {tasks.map((task) => (    
                    <CardTask taskname={task} removeTask={removeTask}/>    
                ))}
            </View>
        </View>

    );
}

export default Main;
