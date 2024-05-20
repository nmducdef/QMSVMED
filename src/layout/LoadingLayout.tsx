import { ReactElement } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import logovmed from "../assets/logovmed.png";

type Props = {
  loading?: boolean;
  children?: ReactElement;
};

const LoadingLayout = ({ loading, children }: Props) => {
  return (
    <div
      style={{
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        style={{ height: "100px", marginBottom: "20px" }}
        src={logovmed}
        alt=""
      />
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 200,
              fontWeight: 700,
            }}
            spin
          />
        }
      />
    </div>
  );
};

export default LoadingLayout;
