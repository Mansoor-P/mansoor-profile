import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Blog from "../components/blog/Blog";

const Home = () => {
  return (
    <>
      <section className="px-6 py-10 max-w-6xl mx-auto space-y-6">
        <Hero showResume={true} />
        <Skills />
        <Blog />
      </section>
    </>
  );
};

export default Home;
