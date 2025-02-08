import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <section className="p-6 ">
      <Navbar />
      <Profile showResume={true} />
      <Skills />
      <Blog />
    </section>
  );
};

export default Home;
