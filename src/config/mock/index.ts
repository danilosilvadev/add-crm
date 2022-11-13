/* eslint-disable */
import { Model, createServer } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import { getLead, getLeadLegal } from "./controllers";
import { initialSeeds } from "./initialSeeds";
// eslint enable
import { ILead, ILeadLegal } from "./types";

export const LeadModel: ModelDefinition<ILead> = Model.extend({});
export const LeadLegalModel: ModelDefinition<ILeadLegal> = Model.extend({});

export function makeServer({ environment = "test" } = {}) {
  const server = createServer({
    models: {
      lead: LeadModel,
      leadLegal: LeadLegalModel,
    },
    seeds(server: any) {
      initialSeeds.leads.forEach((lead: ILead) => {
        server.create("lead", lead);
      });
      initialSeeds.leadsLegal.forEach((leadLegal: ILeadLegal) => {
        server.create("leadLegal", leadLegal);
      });
    },
    routes() {
      // Basic config
      this.namespace = "api";
      this.timing = 1000;
      this.urlPrefix = "http://localhost:8080";

      // routes
      this.get("/lead/:nationalId", getLead);
      this.get("/leadLegal/:nationalId", getLeadLegal);
    },
  });

  return server;
}
