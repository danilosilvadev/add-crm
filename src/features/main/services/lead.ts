import { request } from "@config";

export const requests = {
  getLead: async (nationalId: number) => {
    const { data } = await request.get(`/lead/${nationalId}`);
    return data;
  },
  getLeadLegal: async (nationalId: number) => {
    const { data } = await request.get(`/leadLegal/${nationalId}`);
    return data;
  },
};
