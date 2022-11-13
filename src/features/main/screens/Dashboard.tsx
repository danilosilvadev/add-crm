import React, { useEffect } from "react";
import styled from "styled-components";
import { IStyledTheme, ITheme, request } from "@config";
import { Common } from "@common";
import * as yup from "yup";

interface IForm {
  email: string;
  name: string;
  nationalId: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .min(5, "put at least 5 letters")
    .required("Name is required"),
  email: yup.string().email("Not valid email").required("Email is required"),
  nationalId: yup
    .number()
    .min(7, "Put seven numbers")
    .max(7, "Put 7 numbers")
    .required("National ID is required"),
});

export const Dashboard = () => {
  const { register, handleSubmitForm, formData } = Common.useForm({ schema });

  useEffect(() => {
    request.get("/lead/123").then((res) => {
      console.log(res);
    });
  }, []);

  console.log(formData, "aqui e ali");

  const handleSubmit = (data: IForm | unknown) => {
    console.log(data);
  };

  return (
    <Common.CenterVertical>
      <BG>
        <Form onSubmit={(e) => handleSubmitForm(handleSubmit, e)}>
          <h1>Validate the lead</h1>
          <Common.Input
            register={register}
            name="name"
            label="Name:"
            placeholder="Write your name here"
          />
          <Common.Input
            register={register}
            name="email"
            label="Email:"
            placeholder="Write your email here"
          />
          <Common.Input
            register={register}
            name="nationalId"
            label="National ID:"
            placeholder="Write your national ID here"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </BG>
    </Common.CenterVertical>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 40rem;
  margin-left: 1rem;
  border: ${({ theme }: IStyledTheme) => `2px solid ${theme.colors.primary}`};
  border-radius: 0.5rem;
  padding: 1rem;
`;

const BG = styled.div`
  background-color: ${({ theme }: IStyledTheme) => theme.colors.lightGrey};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: block;
  margin-bottom: 1rem;
  width: 100%;
  background-color: ${({ theme }: IStyledTheme) => theme.colors.primary};
  color: ${({ theme }: IStyledTheme) => theme.colors.white};
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
