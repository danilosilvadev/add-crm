import { Registry } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import { LeadLegalModel, LeadModel } from ".";

export type ILead = {
  name: string;
  email: string;
  nationalId: number;
  score: number;
};

export type ILeadLegal = {
  nationalId: number;
  status: string;
};

export type AppRegistry = Registry<
  {
    lead: typeof LeadModel;
    leadLegal: typeof LeadLegalModel;
  },
  any
>;
export type AppSchema = Schema<AppRegistry>;
