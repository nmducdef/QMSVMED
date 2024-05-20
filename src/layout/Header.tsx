import logovmed from "../assets/logovmed.png";
import logovietba from "../assets/logovietba.png";
import "../layout/Header.css";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

const Header = () => {
  return (
    <>
      {/* <div className="header">
        <Link to={"/"}>
          <img
            className="img1"
            style={{ height: "60px" }}
            src={logovmed}
            alt=""
          />
        </Link>
        <h1>CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG TIN VIỆT BA</h1>
        <img className="img2" src={logovietba} alt="" />
      </div> */}

      <Row>
        <div className="header" style={{ width: "100%" }}>
          <Col span={3}>
            <Link to={"/"}>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  placeContent: "start",
                }}
              >
                <img
                  className="img1"
                  style={{ height: "60px" }}
                  src={logovmed}
                  alt=""
                />
              </div>
            </Link>
          </Col>
          <Col span={18}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h1>CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG TIN VIỆT BA</h1>
            </div>
          </Col>
          <Col span={3}>
            <div
              style={{
                display: "flex",
                placeContent: "end",
                alignContent: "center",
              }}
            >
              <img className="img2" src={logovietba} alt="" />
            </div>
          </Col>
        </div>
      </Row>
    </>
  );
};

export default Header;
