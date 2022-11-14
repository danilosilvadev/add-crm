import styled from "styled-components";
import { IStyledTheme } from "@config";

export const Button = styled.button`
  display: block;
  margin: 1rem 0;
  width: 100%;
  background-color: ${({ theme }: IStyledTheme) => theme.colors.primary};
  color: ${({ theme }: IStyledTheme) => theme.colors.white};
  border: none;
  border-radius: 0.3rem;
  height: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
`;
