import React, { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url, method, payload) => {
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const apicall = async () => {
    try {
      const res = await axios.request({
        data: payload,
        method,
        url,
      });
      setData(res.data);
    } catch {
      setError(error.message);
    } finally {
      setLoaded(true);
    }
  };
  useEffect(() => {
    apicall();
  }, []);
  return { data, error, loaded };
};
