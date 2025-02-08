import React from "react";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <section className="px-6 py-10 max-w-6xl mx-auto space-y-6">
        <Profile showResume={true} />
        <Skills />
        <Blog />
      </section>
    </>
  );
};

export default Home;
