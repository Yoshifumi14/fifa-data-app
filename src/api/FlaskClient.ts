import axios from "axios";

// * -----------------------------------------
// * デバッグ用に使用するローカルサーバー(Flask)
// * -----------------------------------------

const host = process.env.REACT_APP_FLASK_SERVER_HOST;
const port = process.env.REACT_APP_FLASK_SERVER_PORT;

export const axiosInstanceOnFlask = axios.create({
  baseURL: `http://${host}:${port}`,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});
