import ChoTiepDonContainer from "./ChoTiepDonContainer";
import { ChoTiepDonContextProvider } from "./ChoTiepDonContext";

const ChoTiepDonPage = () => {
  return (
    <div>
      <ChoTiepDonContextProvider>
        <ChoTiepDonContainer />
      </ChoTiepDonContextProvider>
    </div>
  );
};

export default ChoTiepDonPage;
