import axios from "axios";

export async function getToken(): Promise<string> {
  const url = `${import.meta.env.VITE_AMADEUS_ROOT}/security/oauth2/token`;
  const { data } = await axios.post(
    url,
    {
      client_id: import.meta.env.VITE_AMADEUS_CLIENT,
      client_secret: import.meta.env.VITE_AMADEUS_SECRET,
      grant_type: "client_credentials",
    },
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );
  return data.access_token;
}
