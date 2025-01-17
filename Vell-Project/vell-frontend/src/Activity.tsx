import { useEffect, useState } from "react";
import "./App.css";
import { getBio, User } from "./github";
import { Activity, getActivity } from "./Activity";
import { getToken } from "./token";
import React from "react";

function Activity() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [activity, setActivity] = useState<Activity | null>(null);

  useEffect(() => {
    let token = "";
    async function fetchData() {
      token = await getToken();
      getActivity(461, token).then(setActivity);
      getBio("sindresorhus").then(setUser);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">{user?.name}</p>
      <p>{user?.bio}</p>
      <p>{activity?.name}</p>
    </>
  );
}
export default Activity;
