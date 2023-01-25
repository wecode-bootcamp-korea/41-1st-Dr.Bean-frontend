import { useEffect, useState } from "react";

const useFetch = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return [data];
};

export default useFetch;
