import { Col, Modal, Row } from "antd";
import Header from "../../layout/Header";
import "../../styles/LaySoKham.css";
import { ArrowRightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import DrawerLayso from "../../layout/DrawerLayso";
import React, { useEffect, useState } from "react";
import { useLaySoContext } from "./LaySoContext";
import { useNavigate } from "react-router-dom";
import LoadingLayout from "../../layout/LoadingLayout";

const LaySoKhamView = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const handleStepNumberClick = () => {
    showIcon ? setDrawerVisible(false) : setDrawerVisible(true);
  };
  const navigate = useNavigate();
  const { data } = useLaySoContext();
  console.log(data);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  useEffect(() => {
    if (Array.isArray(data) && data.length === 0) {
      setIsModalVisible(true);
    }
  }, [data]);
  const handleOk = () => {
    setIsModalVisible(false);
    navigate(-1); // Navigate back
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Modal
        className="modal_layso"
        title="VUI LÒNG NHẬP LẠI MÃ KHÁM BỆNH"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>CÓ VẺ NHƯ MÃ LẦN KHÁM CỦA BẠN KHÔNG ĐÚNG!</p>
      </Modal>
      <Header />
      {isLoading ? (
        <LoadingLayout />
      ) : (
        <div className="laysokham_content">
          <h5 style={{ margin: "0" }}>
            <i>
              HỆ THỐNG <br /> XẾP HÀNG LẤY SỐ TỰ ĐỘNG
            </i>
          </h5>
          <div className="container_lsk">
            <div className="laysokham_step">
              <Row className="row">
                <Col className="col_step" span={16}>
                  <div className="col_step_content">
                    {data &&
                      data.map((item: any) => (
                        <React.Fragment key={item.id}>
                          <div
                            className="steps"
                            style={
                              showIcon
                                ? { background: "gray", cursor: "not-allowed" }
                                : {}
                            }
                            onClick={handleStepNumberClick}
                          >
                            {showIcon ? (
                              <CheckCircleOutlined
                                style={{
                                  color: "green",
                                  fontSize: "80px",
                                  background: "#fff",
                                  width: "16%",
                                  display: "flex",
                                  justifyContent: "center",
                                  borderRadius: "10px",
                                }}
                              />
                            ) : (
                              <div className="step_number">1</div>
                            )}
                            <div className="step_number_title">
                              <h6>{item.serviceType_Name}</h6>
                              <span>Nơi thực hiện: {item.service_Name}</span>
                            </div>
                          </div>
                          <DrawerLayso
                            setShowIcon={setShowIcon}
                            open={drawerVisible}
                            onClose={() => setDrawerVisible(false)}
                          />
                        </React.Fragment>
                      ))}

                    <div className="steps">
                      <div className="step_number">2</div>
                      <div className="step_number_title">
                        <h6>SIÊU ÂM DOPPLER</h6>
                        <span>
                          Nơi thực hiện: Phòng 1078, tầng 2, toà nhà 34
                        </span>
                      </div>
                    </div>
                    <div className="steps">
                      <div className="step_number">3</div>
                      <div className="step_number_title">
                        <h6>SIÊU ÂM DOPPLER</h6>
                        <span>
                          Nơi thực hiện: Phòng 1078, tầng 2, toà nhà 34
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="container_col_note">
                    <div className="col_note">
                      <h1>* LƯU Ý</h1>
                      <h5>
                        Bệnh viện Ung Bướu Hưng Việt <br /> khuyến khích mọi
                        người
                        <br />
                        thực hiện theo đúng <br />
                        thứ tự bệnh viện đã đề ra
                      </h5>
                      <div className="step_note">
                        <p>1</p>
                        <ArrowRightOutlined style={{ fontSize: "20px" }} />
                        <p>2</p>
                        <ArrowRightOutlined style={{ fontSize: "20px" }} />
                        <p>3</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaySoKhamView;
