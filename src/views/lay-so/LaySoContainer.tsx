import { useEffect } from "react";
import { apiQMS } from "../../api/apiQMS";
// import LaySoView from "./LaySoView";
import { useLaySoContext } from "./LaySoContext";
import LaySoKhamView from "./LaySoKhamView";
import { useLocation } from "react-router-dom";

const LaySoContainer = () => {
  const { setContext } = useLaySoContext();
  const location = useLocation();
  const inputValue = new URLSearchParams(location.search).get("inputValue");

  useEffect(() => {
    if (inputValue) {
      const getDanhSachChiDinh = async (patientID: string) => {
        const response = await apiQMS.getDanhSachChiDinh(patientID);
        setContext((prev) => ({ ...prev, data: response.data.table || [] }));
      };
      getDanhSachChiDinh(inputValue);
    }
  }, [inputValue, setContext]);

  return (
    <div>
      <LaySoKhamView />
    </div>
  );
};

export default LaySoContainer;
