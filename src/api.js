export const API = import.meta.env.VITE_API_URL;

export const fetchWithCreds = (url, options = {}) =>
  fetch(`${API}${url}`, {
    credentials: "include",
    ...options,
  });
