import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ILaySoContext = {
  data?: any;
  setContext: Dispatch<SetStateAction<Omit<ILaySoContext, "setContext">>>;
};

export const LaySoContext = createContext<ILaySoContext>({
  setContext: () => {},
});

export const LaySoContextProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [context, setContext] = useState<Omit<ILaySoContext, "setContext">>({});

  return (
    <LaySoContext.Provider value={{ ...context, setContext }}>
      {children}
    </LaySoContext.Provider>
  );
};

export const useLaySoContext = () => useContext(LaySoContext);
