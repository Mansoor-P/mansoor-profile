import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-4 right-4 border text-purple-600 rounded-full p-3 
                 animate-bounce cursor-pointer hover:bg-purple-50 shadow-lg"
      onClick={scrollToTop}
    >
      <span className="text-2xl">
        <FaArrowUp />
      </span>
    </div>
  );
};

export default ScrollToTop;
