import { Cookies } from "react-cookie";

export function useGetToken() {
  const cookie = new Cookies();
  const access_token = cookie.get("userToken");
  return { access_token };
}
