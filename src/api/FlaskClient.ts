import axios from "axios";

// * -----------------------------------------
// * デバッグ用に使用するローカルサーバー(Flask)
// * -----------------------------------------

const host = "localhost";
const port = 5000;

export const axiosInstanceOnFlask = axios.create({
  baseURL: `http://${host}:${port}`,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});
