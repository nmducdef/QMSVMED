import React, { useEffect, useState } from "react";
import ConfigRoomCLSView from "./ConfigRoomCLSView";
import { apiQMSCLS } from "../../api/apiQMS";
import { useConfigRoomCLSContext } from "./ConfigRoomCLSContext";

const ConfigRoomCLSContainer: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const { setContext } = useConfigRoomCLSContext();
  console.log(data);

  useEffect(() => {
    const getListDepartmentFunction = async () => {
      try {
        const response = await apiQMSCLS.getListDepartmentFunction();
        console.log(response.data.data);
        setContext((prev) => ({
          ...prev,
          data: response.data,
        }));
        setData(response.data);

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getListDepartmentFunction();
  }, [setContext]);

  return (
    <>
      <ConfigRoomCLSView data={data} />
    </>
  );
};

export default ConfigRoomCLSContainer;
