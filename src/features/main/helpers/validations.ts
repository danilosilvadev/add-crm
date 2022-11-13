import { ILead } from "@config";
import { ILeadLegal } from "../../../config/mock/types";

export const validations = {
  identity: (lead: ILead, leadForm: ILead) => {
    if (lead && lead.name === leadForm.name && lead.email === leadForm.email) {
      return true;
    } else {
      return false;
    }
  },
  legal: (leadLegal: ILeadLegal) => {
    if (leadLegal && leadLegal.status === "non-defaulter") {
      return true;
    } else {
      return false;
    }
  },
  score: (lead: ILead) => {
    if (lead && lead.score > 60) {
      return true;
    } else {
      return false;
    }
  },
};
