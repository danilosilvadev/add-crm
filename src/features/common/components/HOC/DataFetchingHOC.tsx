import { ErrorBoundaryHOC } from "./ErrorBoundaryHOC";
import { SuspenseHOC } from "./SuspenseHOC";

interface IProps {
  children: React.ReactNode;
  error: string;
  loading: boolean;
}

export const DataFetchingHOC = ({ loading, error, children }: IProps) => {
  return (
    <>
      <SuspenseHOC loading={loading}>
        <ErrorBoundaryHOC error={error}>{children}</ErrorBoundaryHOC>
      </SuspenseHOC>
    </>
  );
};
