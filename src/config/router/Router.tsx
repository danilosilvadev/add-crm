import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { routes } from "./routes";

export const Router = () => {
  return (
    <Center>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        ))}
        <Route path="*" element={<div>Not Found</div>} />
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
