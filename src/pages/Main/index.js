import React, { useState } from 'react';
import { Container, ContainerTasks } from './styles'; 

import Header from '../../components/Header';
import CardTask from '../../components/CardTask';

const Main = () => {
    const [input, setInput] = useState(
            {name: '', description: '', date: ''}
    );
    const [tasks, setTask] = useState(
        [
            {key: 1, name: 'Tarefa 1', description: 'Minha primeira tarefa', date: '11/09/2019'},
            {key: 2, name: 'Tarefa 2', description: 'Minha segunda tarefa', date: '11/09/2019'},
            {key: 3, name: 'Tarefa 3', description: 'Minha terceira tarefa', date: '11/09/2019'}
        ]
    );

    const addTask = () => {
        let count = tasks.length+1;
        let newTask = 
            {key: count, name: input.name, description: input.description, date: input.date}
        
        setTask([...tasks, newTask]);
        setInput('');
    }

    const removeTask = (task) => {
        setTask(tasks.filter(item => item !== task))
    }

    return(
        <Container>
            <Header 
                headertitle="Minhas Tarefas" 
                input={input} 
                setInput={setInput}
                addTask={addTask}  
            />
            <ContainerTasks>
                {tasks.map((task) => (    
                    <CardTask nametask={task} removeTask={removeTask}/>    
                ))}
            </ContainerTasks>
        </Container>

    );
}

export default Main;
