import axios from "axios";
import React from "react";

const useGetData = (url) => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  const refetch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response.data);

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        console.log(response.data);

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return {
    data,
    isLoading,
    refetch,
  };
};

// const { data, refetch } = useGetData("/ekskul");
export default useGetData;
