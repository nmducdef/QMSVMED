import { useEffect, useState } from "react";
import QMSCLSView from "./QMSCLSView";
import { apiQMSCLS } from "../../api/apiQMS";
import { useLocation } from "react-router-dom";
import { useQMSCLSContext } from "./QMSCLSContext";

const QMSCLSContainer = () => {
  const [dsChoKham, setdsChoKham] = useState<any>({});
  const location = useLocation();
  const seletedData = location.state;
  const { setContext } = useQMSCLSContext();
  console.log(dsChoKham);

  useEffect(() => {
    const getQMSDanhSachCLS = async (
      maPhong: string,
      maKhoa: string,
      numberRow: number
    ) => {
      const response = await apiQMSCLS.getQMSDanhSachCLS(
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

    getQMSDanhSachCLS(
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
      <QMSCLSView
        tenPhong={seletedData.maPhong.join(", ")}
        dsChoKham={dsChoKham}
        selectedDepartments={seletedData.maPhong}
        numberRow={seletedData.numberRow}
      />
    </>
  );
};

export default QMSCLSContainer;
