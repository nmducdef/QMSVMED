import { useEffect, useState } from "react";
import QMSView from "./QMSView";
import { apiQMS } from "../../api/apiQMS";
import { useLocation } from "react-router-dom";
import { useQMSContext } from "./QMSContext";

const QMSContainer = () => {
  const [dsChoKham, setdsChoKham] = useState<any>({});
  const location = useLocation();
  const seletedData = location.state;
  const { setContext } = useQMSContext();
  console.log(dsChoKham);

  useEffect(() => {
    const getQMSDanhSachChoKham = async (
      maPhong: string,
      maKhoa: string,
      numberRow: number
    ) => {
      const response = await apiQMS.getQMSDanhSachChoKham(
        maPhong,
        (maKhoa = seletedData.maKhoa),
        numberRow
      );

      setdsChoKham(JSON.parse(response.data));
      setContext((prev) => ({
        ...prev,
        data: JSON.parse(response.data),
      }));
    };

    getQMSDanhSachChoKham(
      seletedData.maPhong,
      seletedData.maKhoa,
      seletedData.numberRow
    );
  }, [
    seletedData.maKhoa,
    seletedData.maPhong,
    seletedData.numberRow,
    setContext,
  ]);

  return (
    <>
      <QMSView
        tenPhong={seletedData.maPhong.join(", ")}
        dsChoKham={dsChoKham}
        selectedDepartments={seletedData.maPhong}
        numberRow={seletedData.numberRow}
      />
    </>
  );
};

export default QMSContainer;
