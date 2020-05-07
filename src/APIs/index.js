const baseURL = process.env.REACT_APP_BASE_URL;
export const api_loadActiveProducts = async () => {
  return await fetch(baseURL + "/products?active=1");
};
export const api_login = async (body) => {
  return await fetch(baseURL + "/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
export const api_refresh_token = async (token) => {
  return await fetch(baseURL + "/admin/refresh-token", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};
export const api_all_products = async (token) => {
  return await fetch(baseURL + "/products?active=1", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};
export const api_add_wine = async (wine, token) => {
  return await fetch(baseURL + "/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(wine),
  });
};
export const api_updateImage = async (body) => {
  return await fetch("https://api.imgbb.com/1/upload", {
    method: "POST",
    body: body,
  });
};
export const api_update_wine = async (wine, token) => {
  return await fetch(baseURL + "/products", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(wine),
  });
};
export const api_active_wine = async (_id, token) => {
  return await fetch(baseURL + "/products/active", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ _id }),
  });
};
export const api_delete_wine = async (_id, token) => {
  return await fetch(baseURL + "/products", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ _id }),
  });
};
