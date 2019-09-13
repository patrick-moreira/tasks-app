import React, { useState } from 'react';
import { TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import { 
    Container, 
    Title, 
    TextHeader,
    TextAdd, 
    ContainerButton, 
    ContainerModal, 
    HeaderModal,
    CloseModal, 
    InputContainer, 
    Border } from './styles';

const Header = ({headertitle, input, setInput, addTask}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Container>
            <Title>
                <TextHeader>{headertitle}</TextHeader>
            </Title>
            <ContainerButton onPress={() =>  setModalVisible(true)}>
                <TextAdd>+</TextAdd>    
            </ContainerButton>

            <Modal transparent={true} visible={modalVisible} animationType="slide"> 
                <ContainerModal>
                    <HeaderModal>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <CloseModal>X</CloseModal>
                        </TouchableOpacity>
                    </HeaderModal>
                    <InputContainer>         
                        <TextInput 
                            placeholder="Nome da tarefa..."
                            onChangeText={(name) => setInput({...input, name})}
                            value={input.name}  
                        />
                        <Border />
                        <TextInput 
                            placeholder="Descrição da tarefa..."
                            onChangeText={(description) => setInput({...input, description})}
                            value={input.description}  
                        />
                        <Border />
                        <TextInput 
                            placeholder="Data (xx/xx/xxxx)"
                            onChangeText={(date) => setInput({...input, date})}
                            value={input.date}  
                        />
                        <Button title="Adicionar" onPress={() => addTask()} color={'#00f'}/>
                    </InputContainer>    
                </ContainerModal>
            </Modal>
        </Container>
    );

}

export default Header;
