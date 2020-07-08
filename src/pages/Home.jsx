import React from "react";
import Terminal from "../components/displays/Terminal";
import CardList from "../components/cards/CardList";

const Home = () => {
  return (
    <div className="page" style={{ textAlign: "center" }}>
      <p className="page-title">Learning OAuth</p>
      <Terminal userData={"passport.authenticate('facebook')"} selected="All" />
      <p style={{ fontSize: 28 }}>Popular Strategies</p>
      <CardList />
      <div style={{ marginBottom: 20 }} />
    </div>
  );
};

export default Home;
