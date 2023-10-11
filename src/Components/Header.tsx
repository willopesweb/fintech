import React from "react";
import { useData } from "../Context/DataContext";
import { Meses } from "./Meses";
import { DateRange } from "./DateRange";

export const Header = () => {
  const { data } = useData();
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <Meses />
    </header>
  );
};
