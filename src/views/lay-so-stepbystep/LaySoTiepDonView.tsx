import { Breadcrumb, Card, Col, Row } from "antd";
import Header from "../../layout/Header";
import "../../styles/LaySoStep.css";

const LaySoTiepDonView = () => {
  return (
    <div>
      <Header />
      <div className="laysostep_container">
        <div className="laysostep_content">
          <Row>
            <Col span={16} className="left_layso">
              <div className="laysostep_sub">
                <p>Vui lòng lấy số thứ tự tiếp đón</p>
              </div>
              <div className="laysostep_gn">
                <Row className="row">
                  <Col span={12} className="col">
                    <Card className="card_layso">
                      <h5>SỐ THỨ TỰ CỦA BẠN</h5>
                      <h1>001</h1>
                    </Card>
                    <button className="btn">DỊCH VỤ</button>
                  </Col>
                  <Col span={12} className="col">
                    <Card className="card_layso">
                      <h5>SỐ THỨ TỰ CỦA BẠN</h5>
                      <h1>001</h1>
                    </Card>
                    <button className="btn">DỊCH VỤ ƯU TIÊN</button>
                  </Col>
                </Row>
                <Row className="row">
                  <Col span={12} className="col">
                    <Card className="card_layso">
                      <h5>SỐ THỨ TỰ CỦA BẠN</h5>
                      <h1>001</h1>
                    </Card>
                    <button className="btn">BẢO HIỂM Y TẾ</button>
                  </Col>
                  <Col span={12} className="col">
                    <Card className="card_layso">
                      <h5>SỐ THỨ TỰ CỦA BẠN</h5>
                      <h1>001</h1>
                    </Card>
                    <button className="btn">BẢO HIỂM Y TẾ ƯU TIÊN</button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="right_layso" span={8}>
              <Row style={{ height: "60%", background: "#00008b" }}>
                <Col span={24}>
                  <div className="list">
                    <h5>DANH SÁCH NGƯỜI BỆNH ĐANG CHỜ</h5>
                  </div>
                  <div className="list_content">
                    <div className="list_content_item">
                      <Breadcrumb
                        items={[
                          {
                            title: <h5 style={{ margin: "0" }}>LOẠI KHÁM</h5>,
                          },
                          {
                            title: (
                              <h5 style={{ margin: "0" }}>SỐ NGƯỜI BỆNH CHỜ</h5>
                            ),
                          },
                        ]}
                      />
                      <Card className="card_wait">a</Card>
                      <Card className="card_wait">a</Card>
                      <Card className="card_wait">a</Card>
                      <Card className="card_wait">a</Card>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ height: "40%", background: "#ccc" }}>
                <Col
                  span={24}
                  className="col_note"
                  style={{ background: "#ccc" }}
                >
                  <div className="note">
                    <h1>* ĐỐI TƯỢNG ƯU TIÊN</h1>
                    <p>1. Trẻ em dưới 6 tuổi.</p>
                    <p>2. Phụ nữ có thai trên 5 tháng.</p>
                    <p>3. Người già trên 80 tuổi.</p>
                    <p>4. Người có công với cách mạng.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LaySoTiepDonView;
