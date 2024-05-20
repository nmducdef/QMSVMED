import { useNavigate } from "react-router-dom";
import "../../styles/LaySo.css";
import Header from "../../layout/Header";
import { Button, Input, Space } from "antd";
import { useState } from "react";

const LaySoView = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue) {
      navigate(`/laysokham?inputValue=${inputValue}`);
    } else {
      alert("Vui lòng nhập giá trị vào trước khi chuyển hướng!");
    }
  };
  return (
    <div>
      <Header />
      <div className="layso_body">
        <div className="layso_body_top">
          <p>
            <i>
              HỆ THỐNG <br /> XẾP HÀNG LẤY SỐ TỰ ĐỘNG
            </i>
            <h5
              style={{
                marginBottom: "10px",
                fontSize: "20px",
                color: "orange",
              }}
            >
              VUI LÒNG NHẬP MÃ LẦN KHÁM CỦA BẠN DƯỚI DÂY
            </h5>
            <Space.Compact style={{ width: "100%", marginTop: "00px" }}>
              <div
                style={{
                  width: "100vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Input
                  style={{
                    width: "60vw",
                    height: "10vh",
                    fontSize: "40px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                  value={inputValue}
                  onChange={handleChange}
                />
              </div>
            </Space.Compact>
            <Button className="btn_malankham" onClick={handleClick}>
              Submit
            </Button>
          </p>
        </div>
      </div>
      <div className="layso_footer"></div>
    </div>
  );
};

export default LaySoView;
