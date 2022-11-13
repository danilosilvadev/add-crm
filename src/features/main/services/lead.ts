import { request } from "@config";

export const requests = {
  getLead: async (nationalId: number) => {
    const { data } = await request.get(`/lead/${nationalId}`);
    return data;
  },
};
