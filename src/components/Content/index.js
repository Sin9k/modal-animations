import { SimpleContent } from "./SimpleContent";
import { ComplexContent } from "./ComplexContent";
import { InfinityLoader } from "./InfinityLoader";

export const Content = () => {
  return (
    <>
      <SimpleContent />
      <hr />
      <ComplexContent />
      <hr />
      <InfinityLoader />
    </>
  );
};
