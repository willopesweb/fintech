import React from "react";
import { Meses } from "./Meses";
import { DateRange } from "./DateRange";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    }
  }, [location]);
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
