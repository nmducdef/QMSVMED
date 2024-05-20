import { Badge, Col, Dropdown, Menu, Row } from "antd";
import Header from "../../../../layout/Header";
import "../../../../styles/ManHinhTQ.css";
import { useScreenTongQuatContext } from "./ScreenTongQuatContext";
import { useMediaQuery } from "@react-hook/media-query";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoadingLayout from "../../../../layout/LoadingLayout";

const ScreenTongQuatView = () => {
  const isIpad = useMediaQuery("(max-width: 900px)");
  const colSpan = isIpad ? 8 : 6;
  const [isLoading, setIsLoading] = useState(true);
  const { data } = useScreenTongQuatContext();
  console.log(data);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/man-hinh-tong-quat-cls">PHÒNG CLS</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Header />
      <div className="mhtq_container">
        <div className="mhtq_total">
          <div>
            <Dropdown overlay={menu} placement="bottomLeft">
              <MenuOutlined className="icon_menu" />
            </Dropdown>
          </div>
          <h5>MÀN HÌNH THỐNG KÊ SỐ LƯỢNG BỆNH NHÂN Ở CÁC PHÒNG KHÁM</h5>
        </div>
        <div className="mhtq_room">
          {isLoading ? (
            <LoadingLayout />
          ) : (
            <Row gutter={[16, 16]} style={{ width: "100%" }}>
              {data &&
                data.map((item: any) => {
                  let tagColor = "";
                  let tagText = "";
                  if (item.so_benh_nhan >= "2") {
                    tagColor = "red";
                    tagText = "Đông bệnh nhân";
                  } else if (item.so_benh_nhan === 0) {
                    tagColor = "gray";
                    tagText = "Không có bệnh nhân";
                  } else {
                    tagColor = "green";
                    tagText = "Bình thường";
                  }
                  const spanColor =
                    item.so_benh_nhan === 0 ? "gray" : "#52c41a";
                  const spanColorV = item.so_benh_nhan >= 2 ? "red" : spanColor;
                  return (
                    <Col span={colSpan} key={item.department_Name}>
                      <Badge.Ribbon text={tagText} color={tagColor}>
                        <div className="mhtq_room_sec">
                          <h4>{item.department_Name}</h4>
                          <h5>
                            <span style={{ color: spanColor && spanColorV }}>
                              {item.so_benh_nhan}
                            </span>
                            NGƯỜI BỆNH ĐANG CHỜ
                          </h5>
                        </div>
                      </Badge.Ribbon>
                    </Col>
                  );
                })}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScreenTongQuatView;
