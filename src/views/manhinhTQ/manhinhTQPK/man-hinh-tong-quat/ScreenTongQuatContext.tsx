import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type IScreenTongQuat = {
  data?: any;
  setContext: Dispatch<SetStateAction<Omit<IScreenTongQuat, "setContext">>>;
};

export const ScreenTongQuatContext = createContext<IScreenTongQuat>({
  setContext: () => {},
});

export const ScreenTongQuatContextProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [context, setContext] = useState<Omit<IScreenTongQuat, "setContext">>(
    {}
  );

  return (
    <ScreenTongQuatContext.Provider value={{ ...context, setContext }}>
      {children}
    </ScreenTongQuatContext.Provider>
  );
};

export const useScreenTongQuatContext = () => useContext(ScreenTongQuatContext);
