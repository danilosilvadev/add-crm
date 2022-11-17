import { ILead, ILeadLegal } from "@config";
import { validations } from "./validations";

const mockLead: ILead = {
  name: "JohnDoe",
  email: "jonny@gmail.com",
  nationalId: 123,
  score: 90,
};

const mockLegalLead: ILeadLegal = {
  nationalId: 123,
  status: "non-defaulter",
};

describe("Main module helpers tests", () => {
  it("should test identity validation helper", () => {
    const identityValidation = validations.identity(mockLead, mockLead);
    expect(identityValidation).toBe(true);
    expect(validations.identity(mockLead, { ...mockLead, name: "test" })).toBe(
      false
    );
  });
  it("should test legal validation helper", () => {
    const legalValidation = validations.legal(mockLegalLead);
    expect(legalValidation).toBe(true);
    expect(validations.legal({ ...mockLegalLead, status: "defaulter" })).toBe(
      false
    );
  });
  it("should test score validation helper", () => {
    const scoreValidation = validations.score(mockLead);
    expect(scoreValidation).toBe(true);
    expect(validations.score({ ...mockLead, score: 30 })).toBe(false);
  });
});
