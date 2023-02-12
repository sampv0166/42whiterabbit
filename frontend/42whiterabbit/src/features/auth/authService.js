import axios from "axios";

export const API_URL = "http://localhost:8001";

const getToken = async (code) => {
  const config = {
    // headers: {
    //   "Content-Type": "application/json",
    // },
  };

  const response = await axios.post(
    "http://localhost:3000/login",
    { code: code },
    config
  );

  if (response.data && response.data.error && response.data.error.code) {
    throw {
      response: response,
      error: new Error(),
    };
  }

  console.log(response);
  return response.data;
};

const authService = {
  getToken,
};

export default authService;
