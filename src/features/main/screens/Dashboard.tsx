import { useEffect } from "react";
import styled from "styled-components";
import { request } from "../../../config/axiosConfig";
import { CenterVertical } from "../../../config/helpers/Center";

const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#ff0070",
    lightGrey: "#f5f5f5",
    darkGrey: "#333",
    white: "#fff",
    black: "#000",
  },
};

export const Dashboard = () => {
  useEffect(() => {
    request.get("/lead/123").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <CenterVertical>
      <BG>
        <Form>
          <h1>Validate the lead</h1>
          <Label htmlFor="name">
            Name:
            <Input type="text" name="name" />
          </Label>
          <Label htmlFor="email">
            E-mail:
            <Input type="text" name="email" />
          </Label>
          <Label htmlFor="nationalId">
            National ID:
            <Input type="text" name="nationalId" />
          </Label>
          <Button type="submit">Submit</Button>
        </Form>
      </BG>
    </CenterVertical>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin-left: 1rem;
  border: 2px solid ${theme.colors.primary};
  border-radius: 0.5rem;
  padding: 1rem;
`;

const BG = styled.div`
  background-color: ${theme.colors.lightGrey};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: grey;
  font-size: 1.5rem;
`;

const Input = styled.input`
  display: block;
  margin: 1rem 0;
  width: 100%;
  height: 2rem;
  border-radius: 0.3rem;
  border: 1px solid ${theme.colors.darkGrey};
`;

const Button = styled.button`
  display: block;
  margin-bottom: 1rem;
  width: 100%;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 0.3rem;
  height: 2rem;
  font-size: 1.5rem;
`;

// 1. Comparar o id e info pessoais no RG central
// The person should exist in the national registry identification external system
// and their personal information should match the information stored in our
// local database.

// 2. ficha limpa
// The person does not have any judicial records in the national archives'
// external system.

// 3. validador de nota de credito entre 0 e 100 e passa com 60
// Our internal prospect qualification system gives a satisfactory score for that
// person. This system outputs a random score between 0 and 100. A lead could
// be turned into prospect if the score is greater than 60.
