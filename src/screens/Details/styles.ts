import styled from "styled-components/native";

interface Props {
    checked: boolean;
}

export const ContainerInformacoes = styled.View`
    flex: 1;
    background-color: #9ACFD7;
    padding: 16px;
    padding-top: 30px;
    gap: 8px;
`;

export const ContainerText = styled.View`
    width: 85%;
    height: 45px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #F8F8F8;
    border-radius: 20px;
    overflow: hidden;
`;

export const Container = styled.View`
    flex: 1;
    padding-top: 0px;
    background-color: #9ACFD7;
    padding-bottom: 50px;
    gap: 8px;
`;

export const TitleContainer = styled.Text`
    align-items: left;
    padding: 2px;
    font-size: 16px;
    color: #000000;
`;

export const DetailContainer = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 45px;
    elevation: 5;
`;

export const DescriptionContainer = styled.View`
    flex-direction: column;
    background-color: #fff;
    padding: 6px;
    border-radius: 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 100px;
    elevation: 5;
`;

export const Text = styled.Text` 
    padding-left: 8px;
    padding-right: 8px;
    font-size: 14px;
    color: #000000;
`;

export const TextStatus = styled.Text` 
    padding-left: 22.5%;
    font-size: 14px;
    color: #000000;
`;
export const TextGoBack = styled.Text` 
    font-size: 14px;
    color: #000000;
`;

export const GoBackButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: start;
    align-items: center;
    justify-content: first baseline;
`;

export const ContainerStatus = styled.View<Props>`
    width: 49px;
    height: 45px;
    background-color: ${({ checked }: Props) => (checked ? '#5CC867' : '#EFC250')};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const TaskCheck = styled.View<Props>`
    width: 20px;
    height: 20px;
    background-color: ${({ checked }: Props) => (checked ? '#24C034' : '#FFB801')};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`;