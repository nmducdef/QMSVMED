import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type IConfigRoomContext = {
  data?: any;
  setContext: Dispatch<SetStateAction<Omit<IConfigRoomContext, "setContext">>>;
};

export const ConfigRoomContext = createContext<IConfigRoomContext>({
  setContext: () => {},
});

export const ConfigRoomContextProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [context, setContext] = useState<
    Omit<IConfigRoomContext, "setContext">
  >({});

  return (
    <ConfigRoomContext.Provider value={{ ...context, setContext }}>
      {children}
    </ConfigRoomContext.Provider>
  );
};

export const useConfigRoomContext = () => useContext(ConfigRoomContext);
