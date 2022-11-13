import { Suspense } from "react";

const Fallback = () => <div>Loading...</div>;

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
