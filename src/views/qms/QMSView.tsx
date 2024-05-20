import React from "react";
import logovietba from "../../assets/logovietba.png";
import logovmed from "../../assets/logovmed.png";
import "../../styles/QMS.css";
import { Divider, Col, Row, Card, Table } from "antd";
import type { TableProps } from "antd";
import { useLocation } from "react-router-dom";
import "../../styles/QMSNho.css";

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

const QMSView: React.FC<dsChoKhamProps> = ({
  dsChoKham,
  tenPhong,
  selectedDepartments,
  numberRow,
}) => {
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
  console.log(dsChoKham);

  return (
    <>
      <div className="container-qms">
        <div className="header-qms">
          <img
            style={{ height: "50px", marginTop: "10px" }}
            src={logovmed}
            alt=""
          />
          <h3>CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG TIN VIỆT BA</h3>
          <img style={{ height: "70px" }} src={logovietba} alt="" />
        </div>
      </div>
      <Divider className="divider" />
      <div className="content-qms">
        <Row gutter={[16, 16]}>
          {selectedData.selectedDepartments.map(
            (department: string, index: number) => (
              <Col
                span={24 / selectedData.selectedDepartments.length}
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
                      style={{ borderRight: "2px solid black" }}
                    >
                      GỌI NHỠ
                    </th>
                    <th className="text-data-nho">
                      {dsChoKham[index]?.QMSNho?.flatMap((item: any) =>
                        item?.DanhSachNho?.map((nho: any, nhoIndex: number) => (
                          <div className="marquee" key={nhoIndex}>
                            <span>
                              {nho.So_Kham || <>&ensp;</>} -{" "}
                              {nho.ten_bn || <>&ensp;</>}
                            </span>
                          </div>
                        ))
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
        </Row>
      </div>
    </>
  );
};

export default QMSView;
