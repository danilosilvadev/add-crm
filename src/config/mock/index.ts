import { Model, Response, createServer, Registry, Instantiate } from "miragejs"; // eslint-disable-line
import { ModelDefinition } from "miragejs/-types"; // eslint-disable-line import/no-unresolved
import Schema from "miragejs/orm/schema"; // eslint-disable-line import/no-unresolved
import { ILead } from "./types";
import { validations } from "./validations";

const LeadModel: ModelDefinition<ILead> = Model.extend({});
type AppRegistry = Registry<
  {
    lead: typeof LeadModel;
  },
  any
>;
type AppSchema = Schema<AppRegistry>;

export function makeServer({ environment = "test" } = {}) {
  const server = createServer({
    models: {
      lead: LeadModel,
    },
    seeds(server: any) {
      server.create("lead", {
        name: "Bob",
        email: "bob@bob.com",
        nationalId: "123",
        score: 80,
      });
      server.create("lead", {
        name: "Alice",
        email: "alice@alice.com",
        nationalId: "456",
        score: 10,
      });
    },
    routes() {
      this.namespace = "api";
      this.timing = 1000;
      this.urlPrefix = "http://localhost:8080";

      this.get("/lead/:nationalId", (schema: AppSchema, request) => {
        const { nationalId } = request.params;
        console.log(nationalId);
        const lead: Instantiate<AppRegistry, "lead"> | null = schema.findBy(
          "lead",
          {
            nationalId,
          }
        );
        if (lead) {
          return lead;
        } else {
          return new Response(
            404,
            { some: "header" },
            { errors: ["User not found"] }
          );
        }
      });
    },
  });

  return server;
}
