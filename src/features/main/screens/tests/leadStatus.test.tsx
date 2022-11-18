import { render, screen } from "@testing-library/react";
import { Providers } from "@config";
import { LeadStatus } from "../LeadStatus";
import "@testing-library/jest-dom";

const mockState = {
  success: false,
  name: "John Doe",
  email: "",
  nationalId: 123,
  score: 80,
  error: "name or e-mail doesn't match",
};

describe("LeadStatus screen tests", () => {
  beforeEach(() => {
    render(
      <Providers.TestProvider initialState={mockState}>
        <LeadStatus />
      </Providers.TestProvider>
    );
  });

  it("should test the snapshot of lead status screen", () => {
    expect(screen).toMatchSnapshot();
  });

  it("should test the lead status screen render", () => {
    expect(screen.getByTestId("dti-lead-status")).toBeInTheDocument();
  });

  it("should test the lead status screen with an invalid name or email", () => {
    expect(
      screen.getByTestId("dti-lead-status-invalid-message")
    ).toHaveTextContent("name or e-mail doesn't match");
  });

  it("should test the lead status screen with a valid lead", () => {
    render(
      <Providers.TestProvider initialState={{ ...mockState, success: true }}>
        <LeadStatus />
      </Providers.TestProvider>
    );
    expect(screen.getByTestId("dti-lead-status-score")).toHaveTextContent("80");
  });
});
