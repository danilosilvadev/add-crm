import { Suspense } from "react";

export const SuspenseHOC = (props: any) => (
  <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
);
