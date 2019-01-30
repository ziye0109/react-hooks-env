import React from "react";
import "./Home.css";
import Header from "./Header";

const Home = () => (
  <>
    <Header />
    <div className="container">
      <div className="box">box1</div>
      <div className="box">box2</div>
      <div className="box">box3</div>
      <div className="box">box4</div>
      <div className="box">box5</div>

      <div className="box">box1</div>
      <div className="box">box2</div>
      <div className="box">box3</div>
      <div className="box">box4</div>
      <div className="box">box5</div>
    </div>
  </>
);

export default Home;
