import Axios from "axios";

let baseUrl = "http://localhost:5000/api/auth";

export const registerCenter = async (user) => {
  try {
    const result = await Axios.post(baseUrl + "/register", user);
    localStorage.setItem("token", result.data.token);
    return result.data.user;
  } catch (error) {
    return false;
  }
};
