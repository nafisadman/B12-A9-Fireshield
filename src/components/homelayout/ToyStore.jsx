import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ToyItem from "./ToyItem";

const ToyStore = () => {
  const data = useLoaderData();

  // console.log("Ami data :(", data);
  return (
    <div>
      <h1 className="text-3xl font-bold text-secondary mb-3">Popular Toys</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data.map((toy) => (
          <ToyItem toy={toy}></ToyItem>
        ))}
      </div>
    </div>
  );
};

export default ToyStore;
