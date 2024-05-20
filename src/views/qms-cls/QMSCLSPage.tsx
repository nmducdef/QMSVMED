import QMSCLSContainer from "./QMSCLSContainer";
import { QMSContextProvider } from "./QMSCLSContext";
const QMSCLSPage = () => {
  return (
    <div>
      <QMSContextProvider>
        <QMSCLSContainer />
      </QMSContextProvider>
    </div>
  );
};

export default QMSCLSPage;
