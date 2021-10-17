import axiosClient from "./axiosClient";
const pilotApi = {
  getPilot: () => {
    return axiosClient.get("/group-list");
  },
};
export default pilotApi;
