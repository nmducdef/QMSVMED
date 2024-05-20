import { useEffect } from "react";
import ScreenTongQuatView from "./ScreenTongQuatView";
import { apiQMS } from "../../../../api/apiQMS";
import { useScreenTongQuatContext } from "./ScreenTongQuatContext";

const ScreenTongQuatContainer = () => {
  const { setContext } = useScreenTongQuatContext();

  useEffect(() => {
    const ThongKeBenhNhanTheoPhong = async () => {
      try {
        const response = await apiQMS.ThongKeBenhNhanTheoPhongKham();
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
      <ScreenTongQuatView />
    </div>
  );
};

export default ScreenTongQuatContainer;
