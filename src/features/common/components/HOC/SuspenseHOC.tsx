import { Suspense } from "react";
import { Spinner } from "../Spinner";

const Fallback = Spinner;

interface IProps {
  loading: boolean;
  children: React.ReactNode;
}

export const SuspenseHOC = ({ loading, children }: IProps) => {
  return (
    <Suspense fallback={Fallback()}>
      {loading ? <Fallback /> : <>{children}</>}
    </Suspense>
  );
};
