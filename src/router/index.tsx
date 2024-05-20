import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ConfigRoomPage from "../views/config/ConfigRoomPage";
import QMSPage from "../views/qms/QMSPage";
import ChoTiepDonPage from "../views/cho-tiep-don/ChoTiepDonPage";
import DefaultView from "../views/default-view/DefaultView";
// import LaySoPage from "../views/lay-so/LaySoPage";
import ConfigRoomCLSPage from "../views/config-cls/ConfigRoomCLSPage";
import QMSCLSPage from "../views/qms-cls/QMSCLSPage";
import LaySoTiepDonPage from "../views/lay-so-stepbystep/LaySoTiepDonPage";
// import LaySoKhamView from "../views/lay-so/LaySoKhamView";
import ScreenTongQuatPage from "../views/manhinhTQ/manhinhTQPK/man-hinh-tong-quat/ScreenTongQuatPage";
import ScreenTQCLSPage from "../views/manhinhTQ/manhinhTQCLS/ScreenTQCLSPage";
import LaySoView from "../views/lay-so/LaySoView";
import LaySoPage from "../views/lay-so/LaySoPage";

const RouterComponent: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultView />} />
          <Route path="/config" element={<ConfigRoomPage />} />
          <Route path="/qms" element={<QMSPage />} />
          <Route path="/chotiepdon" element={<ChoTiepDonPage />} />
          <Route path="/layso" element={<LaySoView />} />
          <Route path="/laysokham" element={<LaySoPage />} />
          <Route path="/laysotiepdon" element={<LaySoTiepDonPage />} />
          <Route path="/configcls" element={<ConfigRoomCLSPage />} />
          <Route path="/qms-cls" element={<QMSCLSPage />} />
          <Route path="/man-hinh-tong-quat" element={<ScreenTongQuatPage />} />
          <Route path="/man-hinh-tong-quat-cls" element={<ScreenTQCLSPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterComponent;
