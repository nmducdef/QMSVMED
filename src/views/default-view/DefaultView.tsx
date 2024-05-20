import { Card, Row, Col } from "antd";
import imgmanhinhlayso from "../../assets/manhinhlayso.png";
import imgmanhinhtiepdon from "../../assets/manhinhtiepdon.png";
import imgmanhinhtongquat from "../../assets/manhinhtongquat.png";
import imgcauhinhphongkham from "../../assets/cauhinhphongkham.png";
import imgmanhinhcls from "../../assets/manhinhcls.png";
import "../../styles/Default.css";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";

const DefaultView = () => {
  const { Meta } = Card;
  return (
    <div>
      <Header />
      <div className="df_body">
        <Card
          className="card_menu"
          title="NHẤN VÀO CÁC LỰA CHỌN Ở TRÊN MÀN HÌNH"
          bordered={false}
        >
          <Row className="row" gutter={[16, 16]}>
            <Link to={"/chotiepdon"}>
              <Col flex="20%">
                <Card
                  hoverable
                  className="card_menu_child"
                  cover={<img alt="example" src={imgmanhinhtiepdon} />}
                >
                  <Meta title="QMS TIẾP ĐÓN" />
                </Card>
              </Col>
            </Link>

            <Link to={"/layso"}>
              <Col flex="20%">
                <Card
                  className="card_menu_child"
                  hoverable
                  cover={<img alt="example" src={imgmanhinhlayso} />}
                >
                  <Meta title="QMS LẤY SỐ" />
                </Card>
              </Col>
            </Link>

            <Link to={"/man-hinh-tong-quat"}>
              <Col flex="20%">
                <Card
                  hoverable
                  className="card_menu_child"
                  cover={<img alt="example" src={imgmanhinhtongquat} />}
                >
                  <Meta title="MÀN HÌNH TỔNG QUÁT" />
                </Card>
              </Col>
            </Link>

            <Link to={"/config"}>
              <Col flex="20%">
                <Card
                  hoverable
                  className="card_menu_child"
                  cover={<img alt="example" src={imgcauhinhphongkham} />}
                >
                  <Meta title="QMS PHÒNG KHÁM" />
                </Card>
              </Col>
            </Link>

            <Link to={"/configcls"}>
              <Col flex="20%">
                <Card
                  hoverable
                  className="card_menu_child"
                  cover={<img alt="example" src={imgmanhinhcls} />}
                >
                  <Meta title="QMS PHÒNG CLS" />
                </Card>
              </Col>
            </Link>

            <Link to={"/laysotiepdon"}>
              <Col flex="20%">
                <Card
                  hoverable
                  className="card_menu_child"
                  cover={<img alt="example" src={imgmanhinhcls} />}
                >
                  <Meta title="MÀN HÌNH LẤY SỐ TIẾP ĐÓN" />
                </Card>
              </Col>
            </Link>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default DefaultView;
