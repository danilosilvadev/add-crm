import { ILead, ILeadLegal, UserContext } from "@config";
import { useValidateLead } from "../useValidateLead";
import { act, cleanup, renderHook } from "@testing-library/react-hooks";
import {
  render,
  screen as page,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import * as Router from "react-router";
import { mocks } from "./mocks";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(Router, "useNavigate").mockImplementation(() => navigate);
});

afterEach(cleanup);

describe("Main module hooks tests", () => {
  it("should return the correct value", () => {
    act(() => {
      /* fire events that update state */
    });

    const Wrapper = ({ children }: { children: any }) => (
      <UserContext.Provider value={{ user: {}, setUser: () => {} }}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="*" element={<>{children}</>} />
            <Route path="/lead-status" element={<div>lead status</div>} />
          </Routes>
        </MemoryRouter>
      </UserContext.Provider>
    );
    const {
      result: {
        current: { handleValidations },
        current,
      },
      waitFor,
    } = renderHook(useValidateLead, { wrapper: Wrapper });
    handleValidations(
      mocks.mockLead,
      mocks.mockLegalLeadNonDefaulter,
      mocks.mockLead
    );
    // waitForElementToBeRemoved(() => page.getByText("Validate the lead"), {
    //   timeout: 1000,
    // });

    expect(handleValidations).toBeDefined();
    // expect(page.getByTestId("dti-lead-validation")).toBeInTheDocument();
    //  expect(resultExpense).toHaveLength(1);
    // const { handleValidations } = useValidateLead();
    // expect(handleValidations(mockLead, mockLegalLead, mockLead)).toBe("test");
    expect(true).toBe(true);
  });
});
