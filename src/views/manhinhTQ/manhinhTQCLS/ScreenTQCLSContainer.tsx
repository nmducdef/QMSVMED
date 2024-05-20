import { useEffect } from "react";
import { useScreenTongQuatCLSContext } from "./ScreenTQCLSContext";
import ScreenTQCLSView from "./ScreenTQCLSView";
import { apiQMS } from "../../../api/apiQMS";

const ScreenTQCLSContainer = () => {
  const { setContext } = useScreenTongQuatCLSContext();

  useEffect(() => {
    const ThongKeBenhNhanTheoPhong = async () => {
      try {
        const response = await apiQMS.ThongKeBenhNhanTheoPhongCLS();
        const data = response.data.table;
        console.log(response.data.table);
        setContext((prev) => ({ ...prev, data: data || [] }));
        console.log("Data from API:", data);
      } catch (error) {}
    };
    ThongKeBenhNhanTheoPhong();
    const interval = setInterval(ThongKeBenhNhanTheoPhong, 100 * 1000);
    return () => clearInterval(interval);
  }, [setContext]);
  return (
    <div>
      <ScreenTQCLSView />
    </div>
  );
};

export default ScreenTQCLSContainer;
