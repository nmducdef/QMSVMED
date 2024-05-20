import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type IChoTiepDonContext = {
  data?: any;
  setContext: Dispatch<SetStateAction<Omit<IChoTiepDonContext, "setContext">>>;
};

export const ChoTiepDonContext = createContext<IChoTiepDonContext>({
  setContext: () => {},
});

export const ChoTiepDonContextProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [context, setContext] = useState<
    Omit<IChoTiepDonContext, "setContext">
  >({});

  return (
    <ChoTiepDonContext.Provider value={{ ...context, setContext }}>
      {children}
    </ChoTiepDonContext.Provider>
  );
};

export const useChoTiepDonContext = () => useContext(ChoTiepDonContext);
