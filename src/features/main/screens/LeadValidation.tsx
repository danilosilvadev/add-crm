import React, { useEffect } from "react";
import styled from "styled-components";
import { IStyledTheme } from "@config";
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
        formData as any
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
            <Common.ControlledInput
              register={register}
              name="name"
              label="Name:"
              data-testid="dti-lead-validation-name"
              placeholder="Write your name here"
            />
            <Common.ControlledInput
              register={register}
              name="email"
              label="Email:"
              data-testid="dti-lead-validation-email"
              placeholder="Write your email here"
            />
            <Common.ControlledInput
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
