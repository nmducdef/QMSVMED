import { useEffect } from "react";
import ChoTiepDonView from "./ChoTiepDonView";
import axiosTiepDon from "../../api/axiosTiepDon";
import { useChoTiepDonContext } from "./ChoTiepDonContext";

const ChoTiepDonContainer = () => {
  const { setContext } = useChoTiepDonContext();
  useEffect(() => {
    const GetListTotal = async () => {
      try {
        const response = await axiosTiepDon.get(`/QMS/GetListTotal`);
        setContext((prev) => ({ ...prev, data: JSON.parse(response.data) }));
      } catch (error) {
        console.log(error);
      }
    };
    GetListTotal();
  }, [setContext]);

  return (
    <div>
      <ChoTiepDonView />
    </div>
  );
};

export default ChoTiepDonContainer;
