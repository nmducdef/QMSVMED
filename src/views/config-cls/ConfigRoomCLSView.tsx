import React from "react";
import "../../styles/Config.css";
import logo from "../../assets/logo.png";
import logovmed from "../../assets/logovmed.png";
import { Col, Row, Select, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useConfigRoomCLSContext } from "./ConfigRoomCLSContext";

interface Department {
  departmentId: number;
  departmentCode: string;
  departmentName: string;
  maBoYte: string;
  parentId: number;
}

interface DataProps {
  data: Department[] | null;
}

const ConfigRoomCLSView: React.FC<DataProps> = () => {
  const { data } = useConfigRoomCLSContext();
  console.log(data);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (maPhong.length > 0) {
      const selectedDepartments = data
        ? data
            .filter((item: any) => maPhong.includes(item.maPhong))
            .map((item: any) => item.tenPhong)
        : [];
      const selectedData = { maKhoa, maPhong, numberRow, selectedDepartments };
      navigate("/qms-cls", { state: selectedData });
    } else {
      alert("Bạn cần chọn đủ các ô");
    }
  };

  const { Title } = Typography;
  const MAX_OPTION = 4;
  const MAX_CHOOSE = 1;
  const [maKhoa, setMaKhoa] = React.useState<string[]>(["KKB"]);
  const [maPhong, setMaPhong] = React.useState<string[]>([]);
  const [numberRow, setNumberRow] = React.useState<string[]>(["6"]);
  const handleChangeValue = (
    valueSelect: string[],
    setValueFunc: (valueSelect: string[]) => void,
    prevValues: string[],
    maxChoose: number
  ) => {
    if (valueSelect.length > maxChoose) {
      valueSelect = valueSelect.slice(0, maxChoose);
    }
    setValueFunc(valueSelect);
    console.log(valueSelect);
  };
  const suffix = (
    <>
      <span>
        {maPhong.length} / {MAX_OPTION}
      </span>
      {/* <DownOutlined /> */}
    </>
  );
  return (
    <>
      <Row>
        <Col span={15}>
          <div className="col-right">
            <div className="container">
              <div className="header-config">
                <img className="logovmed" src={logovmed} alt="" />
                <h1 className="header-config-title">
                  {/* <SettingFilled /> */}CẤU HÌNH PHÒNG CLS
                </h1>
              </div>
              <div className="select-config">
                <div className="select-item">
                  <div className="select-makhoa">
                    <Title level={5}>Mã Khoa</Title>
                    <Select
                      mode="multiple"
                      maxCount={MAX_OPTION}
                      value={maKhoa}
                      style={{ width: "100%", height: "60px" }}
                      onChange={setMaKhoa}
                      suffixIcon={suffix}
                      placeholder="Chọn mã khoa"
                      options={[{ value: "KKB", label: "KKB" }]}
                    />
                  </div>
                  <div className="select-maphong">
                    <Title level={5}>Mã Phòng</Title>
                    <Select
                      mode="multiple"
                      maxCount={MAX_OPTION}
                      value={maPhong}
                      style={{ width: "100%", height: "60px" }}
                      onChange={(valueSelect: string[]) =>
                        handleChangeValue(
                          valueSelect,
                          setMaPhong,
                          maPhong,
                          MAX_OPTION
                        )
                      }
                      suffixIcon={suffix}
                      placeholder="Chọn mã phòng"
                      options={
                        data
                          ? data.map((item: any) => ({
                              value: item.maPhong,
                              label: item.tenPhong,
                            }))
                          : []
                      }
                    />
                  </div>
                  <div className="select-soluong">
                    <Title level={5}>Số lượng</Title>
                    <Select
                      mode="multiple"
                      maxCount={MAX_CHOOSE}
                      value={numberRow}
                      style={{ width: "100%", height: "60px" }}
                      onChange={setNumberRow}
                      suffixIcon={suffix}
                      placeholder="Chọn số lượng"
                      options={[
                        { value: "6", label: "6" },
                        { value: "7", label: "7" },
                        { value: "8", label: "8" },
                      ]}
                    />
                  </div>

                  <div className="submit-select">
                    <Button
                      className="btn-submit"
                      onClick={handleSubmit}
                      type="primary"
                    >
                      Xác nhận
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={9}>
          <div className="col-left">
            <div className="logo-config">
              <img className="" src={logo} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ConfigRoomCLSView;
