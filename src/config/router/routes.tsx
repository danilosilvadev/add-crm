import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { features } from "../../features";

const {
  main: {
    screens: { Dashboard },
  },
} = features;

export const RoutesStack = () => {
  return (
    <Center>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Center>
  );
};

const Center = styled.section`
  margin: 0 auto;
  font-family: helvetica;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
