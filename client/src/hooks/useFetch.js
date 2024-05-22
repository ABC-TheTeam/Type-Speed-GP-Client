import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoad("loading...");
    setError("");
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Something smell fishy here");
        return res.json;
      })
      .then((res) => setData(res.splice(0, 6)))
      .catch((err) => setError(err))
      .finally(() => setLoad(false));
  }, [url]);

  return { data, load, error };
}
