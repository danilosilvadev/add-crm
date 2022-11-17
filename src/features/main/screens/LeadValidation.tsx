import React, { useEffect } from "react";
import styled from "styled-components";
import { ILead, IStyledTheme } from "@config";
import { Common } from "@common";
import { requests } from "../services";
import { leadFormSchema } from "../helpers";
import { useValidateLead } from "../hooks";
import { Button, BG } from "../components";

interface IForm {
  email: string;
  name: string;
  nationalId: string;
}

export const LeadValidation = () => {
  // form state
  const { register, handleSubmitForm, formData } = Common.useForm({
    schema: leadFormSchema,
  });

  // api calls
  const [handleLeadService, leadResponse, leadError, leadLoading] =
    Common.useApi();

  const [
    handleLeadLegalService,
    leadLegalResponse,
    leadLegalError,
    leadLegalLoading,
  ] = Common.useApi();

  // validations
  const { handleValidations } = useValidateLead();

  useEffect(() => {
    if (leadResponse && leadLegalResponse) {
      handleValidations(
        leadResponse.lead,
        leadLegalResponse.leadLegal,
        formData as ILead
      );
    }
  }, [leadResponse]);

  const handleSubmit = (data: IForm | any) => {
    handleLeadService(requests.getLead(data.nationalId));
    handleLeadLegalService(requests.getLeadLegal(data.nationalId));
  };

  return (
    <Common.VCenter>
      <BG>
        <Common.DataFetchingHOC
          loading={leadLoading && leadLegalLoading}
          error={leadError && leadLegalError}
        >
          <Form onSubmit={(e) => handleSubmitForm(handleSubmit, e)}>
            <h1 data-testid="dti-lead-validation">Validate the lead</h1>
            <Common.Input
              register={register}
              name="name"
              label="Name:"
              data-testid="dti-lead-validation-name"
              placeholder="Write your name here"
            />
            <Common.Input
              register={register}
              name="email"
              label="Email:"
              data-testid="dti-lead-validation-email"
              placeholder="Write your email here"
            />
            <Common.Input
              register={register}
              name="nationalId"
              label="National ID:"
              data-testid="dti-lead-validation-nationalId"
              placeholder="Write your national ID here"
            />
            <Button type="submit" data-testid="dti-lead-validation-submit">
              Submit
            </Button>
          </Form>
        </Common.DataFetchingHOC>
      </BG>
    </Common.VCenter>
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