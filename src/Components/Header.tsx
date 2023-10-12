import React from "react";
import { Meses } from "./Meses";
import { DateRange } from "./DateRange";

export const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  return (
    <header className="mb">
      <div className="daterangemb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};
