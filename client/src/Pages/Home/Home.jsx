import React, { useState, useEffect } from "react";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import Storie from "../../components/Storie/Storie";
import "./home.scss";

const Home = () => {
  const [posts, setposts] = useState("");

  return (
    <div className="Home">
      <Navbar />
      <div className="homeContainer">
        <div className="homeItem">
          <div className="hCLeft">
            <Storie />
            <div className="PostContainer">
              <Post />
            </div>
          </div>
          <div className="hCRight">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
