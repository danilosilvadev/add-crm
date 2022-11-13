import { AxiosPromise, AxiosResponse } from "axios"; // eslint-disable-line import/named
import { useState } from "react";

export const useApi = () => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);

  const handleRequest = (service: AxiosPromise) => {
    setError("");
    setloading(true);
    return service
      .then((res: AxiosResponse<unknown>) => {
        setResponse(res);
        setError("");
      })
      .catch((err) => {
        const errMessage = err?.response?.data?.errors[0] || err.message;
        setError(errMessage);
        throw new Error(errMessage);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return [handleRequest, response, error, loading];
};
