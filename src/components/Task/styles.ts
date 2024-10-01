import styled from 'styled-components/native';

interface Props {
    checked: boolean;
}

export const Container = styled.View`
    width: 100%;
    height: 45px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #F8F8F8;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 16px;
`;

export const ContainerTask = styled.View<Props>`
    width: 49px;
    height: 45px;
    background-color: ${({ checked }: Props) => (checked ? '#5CC867' : '#EFC250')};
    border-left: 100px;
    justify-content: center;
    align-items: center;
`;

export const ContainerDelete = styled.View`
    width: 49px;
    height: 45px;
    background-color: #EB5656;
    border-right: 100px;
    justify-content: center;
    align-items: center;
`;

export const TaskText = styled.Text`
    color: #101010;
    font-size: 14px;
    font-weight: 500;
`;

export const ContainerTaskText = styled.TouchableOpacity`
    width: 70%;
    height: 45px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #F8F8F8;
    overflow: hidden;
`;

export const TaskCheck = styled.TouchableOpacity<Props>`
    width: 20px;
    height: 20px;
    background-color: ${({ checked }: Props) => (checked ? '#24C034' : '#FFB801')};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`;

export const TaskDelete = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    background-color: #EE1919;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`;