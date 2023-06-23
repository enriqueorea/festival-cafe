"use client";
import React from "react";
import useSWR from "swr";

interface IProps {
  params: {
    place: string;
  };
}

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

const PlacePage = ({ params }: IProps) => {
  console.log(params.place);

  const { data, error, isLoading } = useSWR(
    `/api/place?place=${params.place}`,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default PlacePage;
