import axios from "axios";

export type Activity = {
  type: string;
  id: string;
  name: string;
  description: string;
  pictures: string[];
  bookingLink: string;
};

export type ActivityData = {
  data: Activity;
};

export async function getActivity(
  active: number,
  token: string
): Promise<Activity> {
  const url = `${
    import.meta.env.VITE_AMADEUS_ROOT
  }/shopping/activities/${active}`;
  const header = `Bearer ${token}`;
  const { data } = await axios.get<ActivityData>(url, {
    headers: { Authorization: header },
  });
  return data.data;
}
