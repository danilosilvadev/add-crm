import { ILead } from "./types";

export const validations = {
  nationalId: (lead: ILead, DB) => {
    const nationalId = lead.nationalId;
    const filteredLead = DB.leads.filter(
      (lead: ILead) => lead.nationalId === nationalId
    );
    if (
      filteredLead.national &&
      filteredLead.name === lead.name &&
      filteredLead.email === lead.email
    ) {
      return filteredLead.score;
    } else {
      return false;
    }
  },
};
