import ConfigRoomClSContainer from "./ConfigRoomCLSContainer";
import { ConfigRoomContextProvider } from "./ConfigRoomCLSContext";

const ConfigRoomCLSPage = () => {
  return (
    <>
      <ConfigRoomContextProvider>
        <ConfigRoomClSContainer />
      </ConfigRoomContextProvider>
    </>
  );
};

export default ConfigRoomCLSPage;
