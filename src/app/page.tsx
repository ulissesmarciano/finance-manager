// src/app/page.tsx
'use client';

import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  max-width: 420px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Button = styled(Link)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(1.5)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  text-align: center;

  &:last-child {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function HomePage() {
  return (
    <Container>
      <Card>
        <Title>Finance Manager</Title>
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
