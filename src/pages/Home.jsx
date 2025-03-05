import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Blog from "./Blog";
const Home = () => {
  return (
    <section className="px-6 lg:px-10 py-10 max-w-6xl mx-auto space-y-12">
      <Hero />
      <Skills />
      <Blog />
    </section>
  );
};

export default Home;
