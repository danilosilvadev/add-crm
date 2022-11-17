import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Providers } from "@config";
import { LeadValidation } from "../LeadValidation";
import "@testing-library/jest-dom";
import { leadFormValidationErrorSchema } from "../../helpers";

interface IFieldsLeadForm {
  email: string;
  name: string;
  nationalId: string;
}

const fieldNames: string[] = Object.keys(leadFormValidationErrorSchema);

const fieldErrorsEmpty: IFieldsLeadForm = {
  email: "Email is required",
  name: "Name is required",
  nationalId: "National ID is required",
};

describe("LeadValidation screen tests", () => {
  beforeEach(() => {
    render(
      <Providers.TestProvider>
        <LeadValidation />
      </Providers.TestProvider>
    );
  });

  const submitButtonAction = () => {
    fireEvent.click(screen.getByTestId("dti-lead-validation-submit"));
  };

  it("should render the lead validation screen", () => {
    expect(screen).toMatchSnapshot();
  });

  it("should test the lead validation form", () => {
    expect(screen.getByTestId("dti-lead-validation")).toBeInTheDocument();
  });

  // fields validations
  it("should test the lead validation form submission with empty fields", async () => {
    submitButtonAction();
    await waitFor(() => {
      fieldNames.forEach((fieldName) => {
        expect(
          screen.getByTestId(`dti-error-message-${fieldName}`)
        ).toHaveTextContent(
          fieldErrorsEmpty[fieldName as keyof typeof fieldErrorsEmpty]
        );
      });
    });
  });

  // custom field errors validations
  fieldNames.forEach((fieldName) => {
    it(`should test the lead validation form submission with invalid ${fieldName}`, async () => {
      const textMock = fieldName === "nationalId" ? 1 : "te";
      fireEvent.change(screen.getByTestId(`dti-lead-validation-${fieldName}`), {
        target: { value: textMock },
      });
      submitButtonAction();
      await waitFor(() => {
        const customError =
          leadFormValidationErrorSchema[
            fieldName as keyof typeof leadFormValidationErrorSchema
          ].custom;
        expect(
          screen.getByTestId(`dti-error-message-${fieldName}`)
        ).toHaveTextContent(customError);
      });
    });
  });

  // success validation
  it("should test the lead validation form submission with valid fields", async () => {
    await fireEvent.change(screen.getByTestId("dti-lead-validation-email"), {
      target: { value: "bob@bob.com" },
    });
    await fireEvent.change(screen.getByTestId("dti-lead-validation-name"), {
      target: { value: "Bob" },
    });
    await fireEvent.change(
      screen.getByTestId("dti-lead-validation-nationalId"),
      {
        target: { value: "123" },
      }
    );
    await submitButtonAction();

    await waitFor(() => {
      fieldNames.forEach((fieldName) => {
        expect(
          screen.queryByTestId(`dti-error-message-${fieldName}`)
        ).not.toBeInTheDocument();
      });
    });
  });
});
