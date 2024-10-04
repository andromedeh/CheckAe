import { Separator, Title, Container } from "./styles"

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Separator />
    </Container>
  )
}