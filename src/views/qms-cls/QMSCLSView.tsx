import React, { useState } from "react";
import "../../styles/QMS.css";
import { Divider, Col, Row, Card, Table } from "antd";
import type { TableProps } from "antd";
import { useLocation } from "react-router-dom";
import "../../styles/QMSNho.css";
import LoadingLayout from "../../layout/LoadingLayout";
import Header from "../../layout/Header";

interface dsChoKhamProps {
  dsChoKham: any;
  tenPhong: string;
  selectedDepartments: any;
  numberRow: any;
}
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const QMSCLSView: React.FC<dsChoKhamProps> = ({
  dsChoKham,
  tenPhong,
  selectedDepartments,
  numberRow,
}) => {
  const number = 3.05;
  const location = useLocation();
  const selectedData = location.state;
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "STT",
      dataIndex: "So_Kham",
      key: "STT",
      width: "24%",
    },
    {
      title: "BỆNH NHÂN ĐANG KHÁM",
      dataIndex: "benhnhan",
      key: "benh-nhan",
    },
  ];
  const parsedNumberRow = parseInt(numberRow);
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <>
      <div className="container-qms">
        <Header />
      </div>
      <Divider className="divider" />
      <div className="content-qms">
        {isLoading ? (
          <LoadingLayout />
        ) : (
          <Row gutter={[16, 16]}>
            {selectedData.selectedDepartments.map(
              (department: string, index: number) => (
                <Col
                  span={16 / selectedData.selectedDepartments.length}
                  key={index}
                >
                  <Card className="ten-phong">{department}</Card>
                  <Table
                    className="table-dang-kham"
                    style={{ width: "98%", marginBottom: "20px" }}
                    columns={columns.map((column) => ({
                      ...column,
                      render: (text: any, record: any, rowIndex) => {
                        if (!record) {
                          return {
                            children: "",
                            props: {
                              colSpan: columns.length,
                            },
                          };
                        }
                        return text;
                      },
                    }))}
                    dataSource={
                      dsChoKham[index]?.QMSDangKham?.map(
                        (item: any, index: number) => ({
                          key: index.toString(),
                          STT: index + 1,
                          So_Kham: item?.BenhNhanDangTiepDon?.So_Kham || "",
                          benhnhan: item?.BenhNhanDangTiepDon?.ten_bn || "",
                        })
                      ) || []
                    }
                    pagination={false}
                    locale={{
                      emptyText: " ",
                    }}
                  />

                  <Table
                    rowClassName="editable-row"
                    className="table-cho-kham"
                    style={{ width: "98%" }}
                    columns={columns}
                    dataSource={dsChoKham[index]?.QMSChoKham?.flatMap(
                      (item: any) =>
                        item?.DanhSachChoTiepDon?.map(
                          (patient: any, patientIndex: number) => ({
                            key: `${item.PhongKham}_${patientIndex}`,
                            STT: patientIndex + 1,
                            So_Kham: patient.So_Kham || "",
                            benhnhan: patient.ten_bn || "",
                          })
                        )
                    ).concat(
                      new Array(
                        Math.max(
                          0,
                          parsedNumberRow && !isNaN(parsedNumberRow)
                            ? parsedNumberRow -
                                1 -
                                (dsChoKham[index]?.QMSChoKham?.[0]
                                  ?.DanhSachChoTiepDon?.length ?? 0)
                            : 0
                        )
                      )
                        .fill(null)
                        .map((_, emptyIndex) => ({
                          key: `empty_${emptyIndex}`,
                          STT:
                            parsedNumberRow && !isNaN(parsedNumberRow)
                              ? parsedNumberRow - emptyIndex - 1
                              : 0,
                          So_Kham: "",
                          benhnhan: "",
                        }))
                    )}
                    pagination={false}
                    locale={{
                      emptyText: " ",
                    }}
                  />

                  <table className="table">
                    <tr>
                      <th
                        className="text-table-nho"
                        style={{
                          borderRight: "2px solid black",
                          height: "50px",
                        }}
                      >
                        GỌI NHỠ
                      </th>
                      <th className="text-data-nho">
                        {dsChoKham[index]?.QMSNho?.flatMap((item: any) =>
                          item?.DanhSachNho?.map(
                            (nho: any, nhoIndex: number) => (
                              <div className="marquee" key={nhoIndex}>
                                <span>
                                  {nho.So_Kham || <>&ensp;</>} -{" "}
                                  {nho.ten_bn || <>&ensp;</>}
                                </span>
                              </div>
                            )
                          )
                        ) || (
                          <div className="marquee">
                            <span>&ensp;</span>
                          </div>
                        )}
                      </th>
                    </tr>
                  </table>
                </Col>
              )
            )}

            <Col span={8}>
              {selectedData.selectedDepartments.map(
                (department: string, index: number) => (
                  <Card
                    title={department}
                    className="custom-card"
                    style={{
                      height: "40vh",
                      marginBottom: "25px",
                      maxWidth: "98%",
                      boxShadow:
                        " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    }}
                  >
                    <Card
                      style={{
                        margin: "0 15px 10px 15px",
                        minHeight: "70px",
                        maxHeight: "70px",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Row>
                        <Col span={4}>
                          <span
                            style={{
                              color: "red",
                              fontWeight: "600",
                              fontSize: "40px",
                              margin: "0",
                            }}
                          >
                            010
                          </span>
                        </Col>
                        <Col span={14}>
                          <span
                            style={{
                              color: "black",
                              fontWeight: "600",
                              fontSize: "20px",
                              margin: "0",
                              display: "flex",
                              justifyContent: "center",
                              lineHeight: "65px",
                            }}
                          >
                            Trần Nguyễn Hạ Lan Trinh
                          </span>
                        </Col>
                        <Col span={6}>
                          <span
                            style={{
                              color: "black",
                              fontWeight: "600",
                              fontSize: "15px",
                              margin: "0",
                              display: "flex",
                              justifyContent: "center",
                              lineHeight: "65px",
                            }}
                          >
                            Chờ kết quả
                          </span>
                        </Col>
                      </Row>
                    </Card>
                    <Card
                      style={{
                        margin: "0 15px 10px 15px",
                        minHeight: "70px",
                        maxHeight: "70px",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Row>
                        <Col span={4}>
                          <span
                            style={{
                              color: "red",
                              fontWeight: "600",
                              fontSize: "40px",
                              margin: "0",
                            }}
                          >
                            010
                          </span>
                        </Col>
                        <Col span={14}>
                          <span
                            style={{
                              color: "black",
                              fontWeight: "600",
                              fontSize: "20px",
                              margin: "0",
                              display: "flex",
                              justifyContent: "center",
                              lineHeight: "65px",
                            }}
                          >
                            Trần Nguyễn Hạ Lan Trinh
                          </span>
                        </Col>
                        <Col span={6}>
                          <span
                            style={{
                              color: "black",
                              fontWeight: "600",
                              fontSize: "15px",
                              margin: "0",
                              display: "flex",
                              justifyContent: "center",
                              lineHeight: "65px",
                            }}
                          >
                            Chờ kết quả
                          </span>
                        </Col>
                      </Row>
                    </Card>
                    <Card
                      style={{
                        margin: "0 15px 10px 15px",
                        minHeight: "70px",
                        maxHeight: "70px",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Row>
                        <Col span={4}>
                          <span
                            style={{
                              color: "red",
                              fontWeight: "600",
                              fontSize: "40px",
                              margin: "0",
                            }}
                          >
                            010
                          </span>
                        </Col>
                        <Col span={14}>
                          <span
                            style={{
                              color: "black",
                              fontWeight: "600",
                              fontSize: "20px",
                              margin: "0",
                              display: "flex",
                              justifyContent: "center",
                              lineHeight: "65px",
                            }}
                          >
                            Trần Nguyễn Hạ Lan Trinh
                          </span>
                        </Col>
                        <Col span={6}>
                          <span
                            style={{
                              color: "black",
                              fontWeight: "600",
                              fontSize: "15px",
                              margin: "0",
                              display: "flex",
                              justifyContent: "center",
                              lineHeight: "65px",
                            }}
                          >
                            Chờ kết quả
                          </span>
                        </Col>
                      </Row>
                    </Card>
                  </Card>
                )
              )}
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};

export default QMSCLSView;
