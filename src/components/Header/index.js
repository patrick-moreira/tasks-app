import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Title, Text, ContainerButton } from './styles';

const Header = (props) => {
    return (
        <Container>
            <Title>
                <Text>{props.headertitle}</Text>
            </Title>
            <ContainerButton>
                <TouchableOpacity>
                    <Text>+</Text>
                </TouchableOpacity>
            </ContainerButton>
        </Container>
    );

}

export default Header;
