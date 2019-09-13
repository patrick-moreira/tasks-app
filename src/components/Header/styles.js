import styled from 'styled-components/native';

export const Container = styled.View`
    background: #700299;
    height: 55;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.View``;

export const TextHeader = styled.Text`
    color: #f1f1f1;
    font-size: 18px;
`;

export const TextAdd = styled.Text`
    color: #f1f1f1;
    font-size: 40px;
`;

export const ContainerButton = styled.TouchableOpacity`
    left: 80;
`;

export const ContainerModal = styled.View`
    flex: 1;
    marginVertical: 15px;
    marginHorizontal: 30px;
    border-radius: 20px;
    background: #8D56D9;
`;

export const HeaderModal = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px;
`; 

export const CloseModal = styled.Text`
    color: #fff;
    margin-right: 10px;
    font-size: 30px;
`;

export const InputContainer = styled.View`
    background: #fff;
    margin: 10px;
    border-radius: 10px; 
`;

export const Border = styled.View`
    borderWidth: 0.3;
    marginHorizontal: 10px;
`;