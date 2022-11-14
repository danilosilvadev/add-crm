import { useContext } from "react";
import { IStyledTheme, UserContext } from "@config";
import { Common } from "@common";
import { Button, Container } from "../components";
import { useNavigate } from "react-router";
import styled from "styled-components";

export const LeadStatus = () => {
  // TODO: resolve typescript error
  const { user }: { user: any } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRestartValidation = () => {
    navigate("/");
  };

  return (
    <Common.Center>
      <Container width="40rem" border>
        {user.success ? (
          <ValidLead {...user} />
        ) : (
          <InvalidLead error={user.error} />
        )}
        <Button onClick={handleRestartValidation}>Restart validation</Button>
      </Container>
    </Common.Center>
  );
};

const ValidLead = (props: any) => {
  return (
    <Flex>
      <section>
        <Title>Valid lead</Title>
        <Flex>
          <Title>Name:</Title>
          <Info>{props.name}</Info>
        </Flex>
        <Flex>
          <Title>Email:</Title>
          <Info>{props.email}</Info>
        </Flex>
        <Flex>
          <Title>National ID:</Title>
          <Info>{props.nationalId}</Info>
        </Flex>
      </section>
      <Score>Score: {props.score}</Score>
    </Flex>
  );
};

const Flex = styled.section`
  display: flex;
  justify-content: space-between;
`;

const InvalidLead = (props) => {
  return (
    <main>
      <ErrorMessage>Invalid Lead</ErrorMessage>
      <ErrorMessage>{props.error}</ErrorMessage>
    </main>
  );
};

const ErrorMessage = styled.h1`
  color: ${({ theme }: IStyledTheme) => theme.colors.error};
`;

const Info = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${({ theme }: IStyledTheme) => theme.colors.darkGrey};
`;

const Title = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  margin-right: 1rem;
  color: ${({ theme }: IStyledTheme) => theme.colors.primary};
`;

const Score = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${({ theme }: IStyledTheme) => theme.colors.success};
`;
