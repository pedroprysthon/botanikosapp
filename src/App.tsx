import React from "react";
import Header from "./components/header";
import NavBar from "./components/NavBar";
import TransactionsList from "./components/TransactionsList";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <TransactionsList />
    </div>
  );
}
export default App;
