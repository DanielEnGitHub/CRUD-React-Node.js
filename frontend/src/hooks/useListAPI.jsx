import { useEffect, useState } from "react";

const useListAPI = ({ getFunction }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getFunction();
      setData(response);
    };
    getData();
  }, []);

  return { data };
};

export default useListAPI;
