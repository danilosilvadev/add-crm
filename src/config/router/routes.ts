import { main } from "@main";

export const routes = [
  {
    path: "/",
    Component: main.screens.LeadValidation,
  },
  {
    path: "/lead-status",
    Component: main.screens.LeadStatus,
  },
];
