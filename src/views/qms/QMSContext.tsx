import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type IQMSContext = {
  data?: any;
  setContext: Dispatch<SetStateAction<Omit<IQMSContext, "setContext">>>;
};

export const QMSContext = createContext<IQMSContext>({
  setContext: () => {},
});

export const QMSContextProvider = ({ children }: { children?: ReactNode }) => {
  const [context, setContext] = useState<Omit<IQMSContext, "setContext">>({});

  return (
    <QMSContext.Provider value={{ ...context, setContext }}>
      {children}
    </QMSContext.Provider>
  );
};

export const useQMSContext = () => useContext(QMSContext);
