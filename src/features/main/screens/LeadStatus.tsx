import { useContext } from "react";
import { UserContext } from "@config";

export const LeadStatus = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.error}</h1>
    </div>
  );
};
