import React, { useEffect, useState } from "react";
import ConfigRoomView from "./ConfigRoomView";
import { apiQMS } from "../../api/apiQMS";
import { useConfigRoomContext } from "./ConfigRoomContext";

const ConfigRoomContainer: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const { setContext } = useConfigRoomContext();
  console.log(data);

  useEffect(() => {
    const getListDepartment = async () => {
      try {
        const response = await apiQMS.getListDepartment();
        console.log(response);
        setContext((prev) => ({
          ...prev,
          data: response.data.table,
        }));
        setData(response.data);

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getListDepartment();
  }, [setContext]);

  return (
    <>
      <ConfigRoomView data={data} />
    </>
  );
};

export default ConfigRoomContainer;
