import styled from 'styled-components/native';

export const ContainerInformacoes = styled.View`
    flex: 1;
    background-color: #9ACFD7;
    padding: 16px;
    padding-top: 30px;
    gap: 8px;
`;

export const Container = styled.View`
    flex: 1;
    background-color: #9ACFD7;
    gap: 8px;
    padding-bottom: 50px;
`;

export const TitleInput = styled.Text`
    align-items: left;
    padding: 2px;
    font-size: 16px;
    color: #000000;
`;

export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    padding: 6px;
    border-radius: 20px;
    width: 100%;
    height: 45px;
    margin-bottom: 20px;
    
`;

export const DescriptionContainer = styled.View`
    flex-direction: column;
    background-color: #fff;
    padding: 6px;
    border-radius: 20px;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 14px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 5px;
    text-align-vertical: top;
    box-sizing: border-box;
    color: #333;
    width: 100%;
    height: 100%;
`;

export const IconContainer = styled.View`
padding-left: 225px;
`;

export const TextGoBack = styled.Text` 
    
`;

export const GoBackButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: start;
    align-items: center;
    justify-content: first baseline;
`;

export const TextValidation = styled.Text` 
font-size: 14px;
color: #FF8477;
padding-left: 6px;
margin-top: -30px;
`;
