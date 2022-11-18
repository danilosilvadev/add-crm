import { cleanup, render, screen } from "@testing-library/react";
import { Providers, theme } from "@config";
import { ControlledInput } from "../ControlledInput";
import "@testing-library/jest-dom";

const mockInputProps = {
  label: "email",
  name: "email",
  placeholder: "email",
  register: {
    errors: {},
    formData: {},
    onChange: jest.fn(),
  },
};

describe("LeadStatus screen tests", () => {
  beforeEach(() => {
    render(
      <Providers.TestProvider>
        <ControlledInput {...mockInputProps} />
      </Providers.TestProvider>
    );
  });

  afterEach(cleanup);

  it("should test the snapshot of controlled input component", () => {
    expect(screen).toMatchSnapshot();
  });

  it("should test the controlled input component render", () => {
    expect(
      screen.getByTestId("dti-controlled-input-label")
    ).toBeInTheDocument();
  });

  it("should test the controlled input component with an error", () => {
    cleanup();
    render(
      <Providers.TestProvider>
        <ControlledInput
          {...mockInputProps}
          register={{
            ...mockInputProps.register,
            errors: { email: "email is invalid" },
          }}
        />
      </Providers.TestProvider>
    );

    const label = screen.getByTestId("dti-controlled-input-label");
    const errorMessage = screen.getByTestId("dti-error-message-email");
    const input = screen.getByTestId("dti-controlled-input");

    // content error
    expect(errorMessage).toHaveTextContent("email is invalid");

    // styles errors
    expect(label).toHaveStyle({
      color: theme.colors.error,
    });

    expect(input).toHaveStyle({ border: `1px solid ${theme.colors.error}` });

    expect(errorMessage).toHaveStyle(`color: ${theme.colors.error}`);
  });
});
