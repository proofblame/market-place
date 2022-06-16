const BASE_URL = "https://increasis-nft.com";
const getResponseData = (res: any) => {
  if (res.ok) {
    return res;
  } else {
    return res
      .json()
      .then((res: any) => Promise.reject(new Error(res.message || res.error)));
  }
};

const sentData = async (data: any) => {
  const res = await fetch(`${BASE_URL}/api/confirm`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000/",
      "Access-Control-Request-Method": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return getResponseData(res);
};

const api = {
  sentData,
};
export default api;
