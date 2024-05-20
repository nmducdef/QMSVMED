import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type IScreenTongQuatCLS = {
  data?: any;
  setContext: Dispatch<SetStateAction<Omit<IScreenTongQuatCLS, "setContext">>>;
};

export const ScreenTongQuatCLSContext = createContext<IScreenTongQuatCLS>({
  setContext: () => {},
});

export const ScreenTongQuatCLSContextProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [context, setContext] = useState<
    Omit<IScreenTongQuatCLS, "setContext">
  >({});

  return (
    <ScreenTongQuatCLSContext.Provider value={{ ...context, setContext }}>
      {children}
    </ScreenTongQuatCLSContext.Provider>
  );
};

export const useScreenTongQuatCLSContext = () =>
  useContext(ScreenTongQuatCLSContext);
