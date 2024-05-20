import { Col, Drawer, Row, notification } from "antd";
import "../layout/DrawerLaySo.css";
import { CheckCircleOutlined } from "@ant-design/icons";

interface DrawerLaysoProps {
  open: boolean;
  onClose: () => void;
  setShowIcon: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerLayso: React.FC<DrawerLaysoProps> = ({
  open,
  onClose,
  setShowIcon,
}) => {
  const [api, contextHolder] = notification.useNotification();
  const closeDrawer = () => {
    onClose();
  };
  const DaLaySo = () => {
    setShowIcon(true);
    api.open({
      message: "BẠN ĐÃ LẤY SỐ THÀNH CÔNG",
      description: "VUI LÒNG NHẬN SỐ THỨ TỰ Ở DƯỚI CASE LẤY SỐ",
      icon: <CheckCircleOutlined style={{ color: "green" }} />,
      className: "custom-class",
      duration: 1,
    });
    setTimeout(() => {
      closeDrawer();
    }, 1200);
  };
  return (
    <div>
      <Drawer
        title="Drawer Title"
        placement="right"
        onClose={closeDrawer}
        open={open}
        width={"100vw"}
      >
        <div className="container_draw">
          <div className="draw_header">
            <p>Hệ thống lấy số thứ tự xếp hàng tự động</p>
          </div>
          <div className="draw_body">
            <Row>
              <Col span={12}>
                <div className="draw_body_display">
                  <div className="display">
                    <h5>SỐ THỨ TỰ CỦA BẠN</h5>
                    <h6>020</h6>
                  </div>
                  <div className="btn" onClick={DaLaySo}>
                    NHẤN ĐỂ LẤY SỐ
                  </div>
                  {contextHolder}
                </div>
              </Col>
              <Col span={12}>
                <div className="draw_body_detail">
                  <div className="steps">
                    <div className="step_number">1</div>
                    <div className="step_number_title">
                      <h6>SIÊU ÂM DOPPLER</h6>
                      <span>Nơi thực hiện: Phòng 1078, tầng 2, toà nhà 34</span>
                    </div>
                  </div>
                  <div className="detail_total">
                    <h5>TỔNG SỐ NGƯỜI BỆNH ĐANG CHỜ</h5>
                    <h6>10</h6>
                  </div>
                  <div className="btn_back" onClick={closeDrawer}>
                    QUAY LẠI
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerLayso;
