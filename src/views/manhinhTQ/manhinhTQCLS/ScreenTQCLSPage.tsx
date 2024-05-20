import ScreenTQCLSContainer from "./ScreenTQCLSContainer";
import { ScreenTongQuatCLSContextProvider } from "./ScreenTQCLSContext";

const ScreenTQCLSPage = () => {
  return (
    <div>
      <ScreenTongQuatCLSContextProvider>
        <ScreenTQCLSContainer />
      </ScreenTongQuatCLSContextProvider>
    </div>
  );
};

export default ScreenTQCLSPage;
