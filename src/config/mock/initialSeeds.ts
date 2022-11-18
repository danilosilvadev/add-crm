import { ILead, ILeadLegal } from "./types";

interface ISeeds {
  leads: ILead[];
  leadsLegal: ILeadLegal[];
}

export const initialSeeds: ISeeds = {
  leads: [
    {
      name: "Bob",
      email: "bob@bob.com",
      nationalId: 123,
      score: 80,
    },
    {
      name: "Alice",
      email: "alice@alice.com",
      nationalId: 456,
      score: 10,
    },
    {
      name: "John",
      email: "john@john.com",
      nationalId: 789,
      score: 40,
    },
  ],
  leadsLegal: [
    {
      nationalId: 456,
      status: "defaulter",
    },
    {
      nationalId: 123,
      status: "non-defaulter",
    },
    {
      nationalId: 789,
      status: "non-defaulter",
    },
  ],
};
