import { ILead, ILeadLegal } from "@config";

const mockLead: ILead = {
  name: "JohnDoe",
  email: "jonny@gmail.com",
  nationalId: 123,
  score: 90,
};

const mockLeadWrongName: ILead = {
  name: "Luis",
  email: "jonny@gmail.com",
  nationalId: 123,
  score: 90,
};
const mockLeadLowScore: ILead = {
  name: "JohnDoe",
  email: "jonny@gmail.com",
  nationalId: 123,
  score: 10,
};

const mockLegalLeadDefaulter: ILeadLegal = {
  nationalId: 123,
  status: "defaulter",
};

const mockLegalLeadNonDefaulter: ILeadLegal = {
  nationalId: 123,
  status: "non-defaulter",
};

export const mocks = {
  mockLead,
  mockLeadWrongName,
  mockLeadLowScore,
  mockLegalLeadDefaulter,
  mockLegalLeadNonDefaulter,
};
