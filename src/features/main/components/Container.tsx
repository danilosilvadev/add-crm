import styled from "styled-components";
import { IStyledTheme } from "@config";

interface IContainer extends IStyledTheme {
  width?: string;
  height?: string;
  border?: boolean;
}

export const Container = styled.section<IContainer>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => `${width}` || "100vw"};
  height: ${({ height }) => `${height}` || "auto"};
  margin-left: 1rem;
  border: ${({ theme, border }) =>
    `${border ? `2px solid ${theme.colors.primary}` : "none"}`};
  border-radius: 0.5rem;
  padding: 1rem;
`;
