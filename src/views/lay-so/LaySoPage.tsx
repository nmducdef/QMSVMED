import LaySoContainer from "./LaySoContainer";
import { LaySoContextProvider } from "./LaySoContext";

const LaySoPage = () => {
  return (
    <div>
      <LaySoContextProvider>
        <LaySoContainer />
      </LaySoContextProvider>
    </div>
  );
};

export default LaySoPage;
