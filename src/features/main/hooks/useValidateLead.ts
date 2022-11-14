import { ILead, ILeadLegal, UserContext } from "@config";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { errorMessagesSchema, validations } from "../helpers";

export const useValidateLead = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const handleValidations = (
    leadResponse: ILead,
    leadLegalResponse: ILeadLegal,
    formData: ILead
  ) => {
    switch (true) {
      case !validations.identity(leadResponse, formData as ILead):
        handleValidationCase({ errorMessage: errorMessagesSchema.identity });
        break;
      case !validations.legal(leadLegalResponse):
        handleValidationCase({ errorMessage: errorMessagesSchema.legal });
        break;
      case !validations.score(leadResponse):
        handleValidationCase({ errorMessage: errorMessagesSchema.score });
        break;
      default:
        handleValidationCase({ leadResponse, success: true });
    }
  };

  interface IHandleValidationCase {
    errorMessage?: string;
    success?: boolean;
    leadResponse?: ILead | any;
    leadLegalResponse?: ILeadLegal | any;
  }

  const handleValidationCase = ({
    errorMessage = "",
    success = false,
    leadResponse = {},
    leadLegalResponse = {},
  }: IHandleValidationCase) => {
    setUser({
      ...leadResponse,
      ...leadLegalResponse,
      error: errorMessage,
      success,
    });
    navigate("/lead-status");
  };

  return { handleValidations };
};
