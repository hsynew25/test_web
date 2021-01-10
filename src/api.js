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
  changePassword: (accessToken, password, newPassword) =>
    api.put(
      "user/password",
      { password, newPassword },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ),
  duplicationCheck: (username, nickname, email) =>
    api.get(
      `auth/duplcheck?username=${username}&nickname=${nickname}&email=${email}`
    ),
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
  getRandom: (limit) => api.get(`content/random?limit=${limit}`),
  updateContent: (accessToken, id, description) =>
    api.put(
      `content/${id}`,
      { description },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ),
};

export const replyApi = {
  sendReply: (accessToken, contentId, description) =>
    api.post(
      `reply/content/${contentId}`,
      { description },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ),
  getReplies: (contentId, page = 0, countPerPage = 10) =>
    api.get(
      `reply/content/${contentId}?page=${page}&countPerPage=${countPerPage}`
    ),
  sendReReply: (accessToken, replyId, description, toUsername = null) =>
    api.post(
      `reply/${replyId}/rereply`,
      { description, toUsername },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ),
};
