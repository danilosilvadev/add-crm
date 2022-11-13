import { AxiosPromise, AxiosResponse } from "axios";
import { useState } from "react";

export const useApi = () => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setloading] = useState<boolean>(true);

  const handleRequest = (service: AxiosPromise) => {
    return service
      .then((res: AxiosResponse<unknown>) => {
        setResponse(res);
        return res;
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return [handleRequest, response, error, loading];
};
