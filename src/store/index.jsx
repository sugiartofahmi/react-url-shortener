import { selector, atom } from "recoil";
import axios from "axios";
export const urlState = atom({
  key: "url-state",
  default: "",
});

export const fetchUrl = selector({
  key: "fetch-url",
  get: async ({ get }) => {
    const query = {
      url: get(urlState),
    };
    if (get(urlState) !== "") {
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL, {
          params: query,
        });
        return res.data || {};
      } catch (error) {
        console.log(error);
      }
    } else {
      return {};
    }
  },
});
