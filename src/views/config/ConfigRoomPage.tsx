import ConfigRoomContainer from "./ConfigRoomContainer";
import { ConfigRoomContextProvider } from "./ConfigRoomContext";

const ConfigRoomPage = () => {
  return (
    <>
      <ConfigRoomContextProvider>
        <ConfigRoomContainer />
      </ConfigRoomContextProvider>
    </>
  );
};

export default ConfigRoomPage;
