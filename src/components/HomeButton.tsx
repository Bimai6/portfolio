import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeButton() {
    const navigate = useNavigate();
    const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtBottom(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed lg:hidden bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-500 p-6 rounded-full transition-all duration-500 z-50 cursor-pointer ${
        atBottom ? "" : "opacity-80 scale-70"
      }`}
      onClick={() => navigate("/")}
    >
      <img
        src="https://res.cloudinary.com/dus7e3jkj/image/upload/v1759405400/home-svgrepo-com_lhgxgd.svg"
        className="w-12"
      />
    </div>
  );
}
