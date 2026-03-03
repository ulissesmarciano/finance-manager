import {
  Actions,
  Button,
  Card,
  CardTitle,
  Container,
  HomePageHeader,
  SIcon,
  Subtitle,
  Title,
} from "./page.styled";

import HomePageIcon from "../../public/icons/icone.png"

export default function HomePage() {
  return (
    <Container>
      <HomePageHeader>
        <SIcon src={HomePageIcon} alt="icone do finance manager" />
        <Title>Finance Manager</Title>
      </HomePageHeader>
      <Card>
        <CardTitle>Construa Seu Futuro</CardTitle>
        <Subtitle>
          Controle suas finanças pessoais de forma simples e organizada.
        </Subtitle>

        <Actions>
          <Button href="/login">Entrar</Button>
          <Button href="/register">Criar conta</Button>
        </Actions>
      </Card>
    </Container>
  );
}
