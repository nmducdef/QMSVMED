import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type IQMSCLSContext = {
  data?: any;
  setContext: Dispatch<SetStateAction<Omit<IQMSCLSContext, "setContext">>>;
};

export const QMSCLSContext = createContext<IQMSCLSContext>({
  setContext: () => {},
});

export const QMSContextProvider = ({ children }: { children?: ReactNode }) => {
  const [context, setContext] = useState<Omit<IQMSCLSContext, "setContext">>(
    {}
  );

  return (
    <QMSCLSContext.Provider value={{ ...context, setContext }}>
      {children}
    </QMSCLSContext.Provider>
  );
};

export const useQMSCLSContext = () => useContext(QMSCLSContext);
