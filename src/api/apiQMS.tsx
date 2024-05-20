import axiosClient from "./axiosClient";

export const apiQMS = {
  getListDepartment: () => {
    const url = `/api/QMS/getListDepartment`;
    return axiosClient.get(url);
  },

  getQMSDanhSachChoKham: (maPhong: string, maKhoa: any, numberRow: number) => {
    const url = `/api/QMS/QMSDanhSachChoKham?maPhong=${maPhong}&maKhoa=${maKhoa}&numberRow=${numberRow}`;
    return axiosClient.get(url, {
      headers: {
        accept: "text/plain",
      },
    });
  },

  getDanhSachChiDinh: (patientID: string) => {
    const url = `/api/QMS/DanhSachChiDinh?patientCode=${patientID}`;
    return axiosClient.get(url);
  },

  ThongKeBenhNhanTheoPhongKham: () => {
    const url = `/api/QMS/ThongKeBenhNhanTheoPhongKham`;
    return axiosClient.get(url);
  },

  ThongKeBenhNhanTheoPhongCLS: () => {
    const url = `/api/QMS/ThongKeBenhNhanTheoPhongCLS`;
    return axiosClient.get(url);
  },
};

export const apiQMSCLS = {
  getListDepartmentFunction: () => {
    const url = `/api/QMS/getListDepartmentFunction`;
    return axiosClient.get(url);
  },

  getQMSDanhSachCLS: (maPhong: string, maKhoa: any, numberRow: number) => {
    const url = `/api/QMS/QMSDanhSachCLS?maPhong=${maPhong}&maKhoa=${maKhoa}&numberRow=${numberRow}`;
    return axiosClient.get(url, {
      headers: {
        accept: "text/plain",
      },
    });
  },
};
