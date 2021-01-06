import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}/`,
});

export const userApi = {
  signUp: (username, email, password, nickname, job, location, snsBundle) =>
    api.post("auth/signup", {
      username,
      email,
      password,
      nickname,
      job,
      location,
      snsBundle,
    }),
  signIn: (username, password) =>
    api.post("auth/signin", { username, password }),
  tokenValidation: (accessToken) =>
    api.get("auth/validation", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  getProfile: (username) => api.get(`user/profile/${username}`),
  getMyProfile: (accessToken) =>
    api.get("user/profile/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  updateProfile: (formData, accessToken) =>
    api.put("user/profile", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    }),
};

export const contentApi = {
  upload: (formData, accessToken) =>
    api.post("content/upload", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    }),
  getAll: (username) => api.get(`content/all/${username}?skip=0&limit=20`),
  getContent: (id) => api.get(`content/${id}`),
  getMe: (accessToken) =>
    api.get("content/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  deleteContent: (accessToken, id) =>
    api.delete(`content/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
};
