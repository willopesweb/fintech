import { useState } from "react";
import "./Style.css";
import { Resumo } from "./Pages/Resumo";
import { Header } from "./Components/Header";
import { Sidenav } from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import { DateRange } from "./Components/DateRange";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <Header />
        <DateRange />
        <Resumo />
      </div>
    </DataContextProvider>
  );
}

export default App;
