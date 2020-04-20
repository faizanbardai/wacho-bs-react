const baseURL = process.env.REACT_APP_BASE_URL;
export const api_login = async (body) => {
  return await fetch(baseURL + "/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
