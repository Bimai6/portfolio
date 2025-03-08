import { useParams, useNavigate } from "react-router-dom";
import { Repo } from "../fetch/Fetch";
import { handleDate, handleTitle } from "../utils/FixedFields";
import { useEffect, useState } from "react";
import { ProjectImages } from "../utils/ImageLinks";

interface InnerProjectProps {
  repos: Repo[];
}

const InnerProject = ({ repos }: InnerProjectProps) => {
  const { repoName } = useParams();
  const navigate = useNavigate();
  const [repo, setRepo] = useState<Repo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (repoName) {
      const selectedRepo = repos.find((repo) => repo.name === repoName);
      setRepo(selectedRepo ?? null);
    }
  }, [repoName, repos]);

  if (!repo) {
    navigate("/");
    return null;
  }

  const normalizeRepoName = (name: string) => name.toLowerCase().replace(/[-_ ]/g, "");
  const images = ProjectImages[normalizeRepoName(repo.name)] || [];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-full h-screen bg-white text-purple-800">
        <div className="flex flex-row justify-between items-end bg-purple-800 text-white pt-7 pb-7">
          <p className="font-extrabold pl-15 text-6xl">{handleTitle(repo.name)}</p>
          <p className="pr-10 text-2xl">{handleDate(repo.created_at)}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row border-b border-purple-800">
            <div id="default-carousel" className="relative h-full w-3/6 border-r border-purple-800" data-carousel="slide">
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((image, index) => (
                  <div key={index} className={`${index === currentIndex ? "block" : "hidden"} duration-700 ease-in-out`} data-carousel-item>
                      <img src={image} className="absolute block max-w-full max-h-[80%] object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 ml-3">❮</button>
              <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 mr-3">❯</button>
            </div>
            <div className="flex flex-col">
              <div></div>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-20 h-screen bg-gray-500" onClick={() => navigate("/")}></div>
    </div>
  );
};

export default InnerProject;
