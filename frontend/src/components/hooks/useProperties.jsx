import React from "react";
import { useQuery } from "react-query";
import { getAllProperties } from "../../utils/api";

const useProperties = () => {
  // data fetching behind the scenes
  const { data, isLoading, isError, refetch } = useQuery(
    "allPropeties",
    getAllProperties,
    { refetchOnWindowFocus: false }
  );
  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProperties;
