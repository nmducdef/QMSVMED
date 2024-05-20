import ScreenTongQuatContainer from "./ScreenTongQuatContainer";
import { ScreenTongQuatContextProvider } from "./ScreenTongQuatContext";

const ScreenTongQuatPage = () => {
  return (
    <div>
      <ScreenTongQuatContextProvider>
        <ScreenTongQuatContainer />
      </ScreenTongQuatContextProvider>
    </div>
  );
};

export default ScreenTongQuatPage;
