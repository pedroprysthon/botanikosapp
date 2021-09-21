import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import TransactionsList from "../../components/TransactionsList";

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <TransactionsList />
    </>
  );
};

export default Home;
