import QMSContainer from "./QMSContainer";
import { QMSContextProvider } from "./QMSContext";
const QMSPage = () => {
  return (
    <div>
      <QMSContextProvider>
        <QMSContainer />
      </QMSContextProvider>
    </div>
  );
};

export default QMSPage;
