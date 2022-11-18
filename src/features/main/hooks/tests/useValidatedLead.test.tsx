import { Providers } from "@config";
import { useValidateLead } from "../useValidateLead";
import { cleanup, renderHook } from "@testing-library/react-hooks";
import * as Router from "react-router";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

let navigateSpy: jest.SpyInstance;

beforeEach(() => {
  navigateSpy = jest.spyOn(Router, "useNavigate");
});

afterEach(cleanup);

describe("useValidateLead hook tests", () => {
  it("should test if after handleValidations is called useNavigate is called", () => {
    const {
      result: {
        current: { handleValidations },
      },
    } = renderHook(useValidateLead, { wrapper: Providers.TestProvider });

    expect(handleValidations).toBeDefined();

    expect(navigateSpy).toHaveBeenCalled();
  });
});
