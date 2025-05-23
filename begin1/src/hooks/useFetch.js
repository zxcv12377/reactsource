import { useEffect, useState } from "react";

export const useFetch = (url) => {
  console.log("url", url);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        console.log("res" + res);
        const result = await res.json();
        console.log("result" + result);
        setData(result.dtoList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { data, error, loading };
};
