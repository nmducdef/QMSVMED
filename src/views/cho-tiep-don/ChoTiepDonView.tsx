import logovietba from "../../assets/logovietba.png";
import logovmed from "../../assets/logovmed.png";
import "../../styles/ChoTiepDon.css";
import { Col, Row } from "antd";
import { useChoTiepDonContext } from "./ChoTiepDonContext";

const ChoTiepDonView = () => {
  const { data } = useChoTiepDonContext();
  console.log(data);

  return (
    <div className="ctd_container">
      <div className="ctd_body">
        <div className="ctd_header">
          <img src={logovmed} alt="" />
          <h1>CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG TIN VIỆT BA</h1>
          <img src={logovietba} alt="" />
        </div>

        <Row>
          <Col span={14}>
            <table className="table_tiepdon">
              <tr>
                <th
                  className="title1"
                  style={{ textAlign: "center" }}
                  colSpan={2}
                >
                  ĐANG TIẾP ĐÓN
                </th>
              </tr>
              <tr>
                <th className="title" style={{ width: "50%" }}>
                  SỐ TIẾP ĐÓN
                </th>
                <th className="title" colSpan={1}>
                  QUẦY TIẾP ĐÓN
                </th>
              </tr>
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  {data && data._qmsdang && data._qmsdang[index] ? (
                    <>
                      <td
                        style={{
                          color:
                            data._qmsdang[index].Is_UuTien === "1"
                              ? "yellow"
                              : "white",
                        }}
                      >
                        {data._qmsdang[index].So_Kham || <>&nbsp;</>}
                      </td>
                      <td
                        style={{
                          color:
                            data._qmsdang[index].Is_UuTien === "1"
                              ? "yellow"
                              : "white",
                        }}
                      >
                        {data._qmsdang[index].Ten_Quay || <>&nbsp;</>}
                      </td>
                    </>
                  ) : (
                    <>
                      <td style={{ lineHeight: "2.4" }}>
                        <>&nbsp;</>
                      </td>
                      <td>
                        <>&nbsp;</>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </table>
          </Col>
          <Col span={10}>
            <table className="table_tiepdon">
              <tr>
                <th className="title1" style={{ textAlign: "center" }}>
                  CHỜ TIẾP ĐÓN
                </th>
              </tr>
              <tr>
                <th className="title">SỐ CHỜ TIẾP ĐÓN</th>
              </tr>
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  {data && data._qmscho && data._qmscho[index] ? (
                    <td
                      style={{
                        color:
                          data._qmscho[index].Is_UuTien === "1"
                            ? "yellow"
                            : "white",
                      }}
                    >
                      {data._qmscho[index].So_Kham || <>&nbsp;</>}
                    </td>
                  ) : (
                    <td>
                      <>&nbsp;</>
                    </td>
                  )}
                </tr>
              ))}
            </table>
          </Col>
        </Row>

        <div
          className="marquee-container"
          style={{
            background: "#00008b",
            width: "100vw",
            height: "7vh",
          }}
        >
          <p className="marquee">BỆNH VIỆN XIN KÍNH CHÀO QUÝ KHÁCH</p>
        </div>
      </div>
    </div>
  );
};

export default ChoTiepDonView;
