import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'; 

const Main = () => {
    const [input, setInput] = useState('');
    const [tasks, setTask] = useState(['Tarefa 1']);

    const addTask = () => {
        setTask([...tasks, input]);
        setInput('');
        alert('Item adicionado com sucesso!');
    }
    
    const removeTask = (task) => {
        setTask(tasks.filter(item => item !== task))
        alert('Item removido com sucesso!');
    }

    return(
        <View>
            <View style={styles.containerHeader}>
                <Text style={styles.textHeader}>Minhas Tarefas</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputTask}>
                        <TextInput 
                            placeholder="Digite sua tarefa..."
                            onChangeText={(input) => setInput(input)}
                            value={input}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonAdd} onPress={addTask}>
                        <Text style={styles.textButtonAdd}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
                
                {tasks.map((task) => (                   
                    <View style={styles.cardContainer}>
                        <View style={styles.cardTask}>
                            <Text>{task}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonRmv} onPress={() => removeTask(task)}>
                            <Text style={styles.textButtonRmv}>Remover</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>

    );
}

export default Main;
