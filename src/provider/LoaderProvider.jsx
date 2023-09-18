import { useMemo, useState } from "react";
import { LoadingContext } from "../context/loading";

import Loading from "../@core/components/loading/Loading";

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const show = () => {
    setLoading(true);
  };

  const hide = () => {
    setLoading(false);
  };

  const load = useMemo(() => ({ loading, show, hide }), []);

  return (
    <LoadingContext.Provider value={load}>
      {loading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
};
