import styled from 'styled-components/native';

export const CardContainer = styled.View`
    margin-top: 20;
    flex-direction: row;
    justify-content: space-between;
`;

export const CardContent = styled.View`
    background: #fff;
    flex: 0.95;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
    height: 60px;
    border-radius: 10px;
    padding: 10px; 
`;

export const CardTaskName = styled.View``;

export const TaskName = styled.Text`
    font-size: 18px;
`;

export const TaskDescription = styled.Text`
    font-size: 14px;
    color: #ccc;
`;

export const Date = styled.View``;

export const TaskDate = styled.Text`
    font-size: 12px;
    color: #ccc;

`;