import styled from "styled-components";
import { IStyledTheme } from "@config";

export const BG = styled.div`
  background-color: ${({ theme }: IStyledTheme) => theme.colors.lightGrey};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
