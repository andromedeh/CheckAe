import { Container, FilterTitle, FilterOption, InnerCircle } from './styles';
import { TouchableOpacity } from 'react-native';

type Props = {
  selected: boolean;
  title: string;
  color: string;
  onPress: () => void; // Adiciona uma função que será chamada quando o filtro for selecionado
};

export function Filter({ selected, title, color, onPress }: Props) {
  return (
    <Container >
      <TouchableOpacity onPress={onPress}>
        <FilterOption style={{ backgroundColor: color, borderColor: 'black', borderWidth: 1 }}>
          {selected && <InnerCircle />}
        </FilterOption>
      </TouchableOpacity>
      <FilterTitle>{title}</FilterTitle>
    </Container>

  );
};