import { Response } from "miragejs";
import { Instantiate } from "miragejs/-types";
import { AppRegistry, AppSchema } from "./types";

export const getLeadLegal = (schema: AppSchema, request: any) => {
  const { nationalId } = request.params;
  const leadLegal = schema.findBy("leadLegal", { nationalId });
  if (leadLegal) {
    return leadLegal;
  } else {
    return errorHandler(404, "Lead not found");
  }
};

export const getLead = (schema: AppSchema, request: any) => {
  const { nationalId } = request.params;
  const lead: Instantiate<AppRegistry, "lead"> | null = schema.findBy("lead", {
    nationalId,
  });
  if (lead) {
    return lead;
  } else {
    return errorHandler(404, "Lead not found");
  }
};

const errorHandler = (code: number, message: string) =>
  new Response(code, { some: "header" }, { errors: [message] });
