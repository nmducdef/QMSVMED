import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type IConfigRoomCLSContext = {
  data?: any;
  setContext: Dispatch<
    SetStateAction<Omit<IConfigRoomCLSContext, "setContext">>
  >;
};

export const ConfigRoomCLSContext = createContext<IConfigRoomCLSContext>({
  setContext: () => {},
});

export const ConfigRoomContextProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [context, setContext] = useState<
    Omit<IConfigRoomCLSContext, "setContext">
  >({});

  return (
    <ConfigRoomCLSContext.Provider value={{ ...context, setContext }}>
      {children}
    </ConfigRoomCLSContext.Provider>
  );
};

export const useConfigRoomCLSContext = () => useContext(ConfigRoomCLSContext);
