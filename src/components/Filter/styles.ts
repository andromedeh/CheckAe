import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
`;

export const FilterTitle = styled.Text`
  color: black;
  font-size: 16px;
`;

export const FilterOption = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  justify-content: center; 
  align-items: center; 
`;

export const InnerCircle = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: black;
`;
