import { useContext, createContext } from "react";

export const LoadingContext = createContext({});

export const useLoading = () => useContext(LoadingContext);
