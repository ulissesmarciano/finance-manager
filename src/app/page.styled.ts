"use client";

import styled, { css, DefaultTheme } from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Container = styled.main`
  ${({ theme }: { theme: DefaultTheme }) => {
    return css`
      background-image: linear-gradient(#00000050, #00000050),
        url("images/home-background.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: ${theme.spacing(12)};
    `;
  }}
`;

export const HomePageHeader = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => {
    return css`
      background-color: ${theme.colors.noColor};
      display: flex;
      align-items: center;
      gap: 20px;
    `;
  }}
`;

export const Title = styled.h1`
  ${({ theme }: { theme: DefaultTheme }) => {
    return css`
      font-size: 20px;
      color: ${theme.colors.secondary};
    `;
  }}
`;

export const SIcon = styled(Image)`
${({theme} : {theme: DefaultTheme}) => {
  return css`
    height: 40px;
    width: auto;
  `
}}
`
export const Card = styled.div`
  background-color: #00000050;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  max-width: 420px;
  width: 100%;
`;

export const CardTitle = styled.h1`
  ${({ theme }: { theme: DefaultTheme }) => {
    return css`
      font-size: 40px;
      margin-bottom: ${theme.spacing(2)};
      color: ${theme.colors.secondary};
    `;
  }}
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Button = styled(Link)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(1.5)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.text};
  font-weight: 600;
  text-align: center;
  
  &:last-child {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({theme}) => theme.colors.secondary};
  }
`;
