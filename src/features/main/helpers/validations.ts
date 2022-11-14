import { ILead, ILeadLegal } from "@config";

export const validations = {
  identity: (lead: ILead, leadForm: ILead) => {
    return lead.name === leadForm.name && lead.email === leadForm.email;
  },
  legal: (leadLegal: ILeadLegal) => {
    return leadLegal && leadLegal.status === "non-defaulter";
  },
  score: (lead: ILead) => {
    return lead && lead.score > 60;
  },
};
