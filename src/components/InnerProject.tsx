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
    <div className="flex flex-row h-screen">
      <div className="flex flex-col w-full bg-white text-purple-800">
        <div className="flex flex-row justify-between items-center bg-purple-800 text-white py-7 px-10">
          <p className="font-extrabold text-6xl">{handleTitle(repo.name)}</p>
          <p className="text-2xl">{handleDate(repo.created_at)}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row border-b border-purple-800">
            <div id="default-carousel" className="w-4/6 border-r border-purple-800">
              <div className="overflow-hidden h-[450px]">
                {images.map((image, index) => (
                  <div key={index} className={`${index === currentIndex ? "block" : "hidden"} h-full flex justify-center transition-all duration-700 ease-in-out`}>
                    <img
                      src={image}
                      className="mt-5 h-full max-w-[90%] object-contain"
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 inset-0 items-center my-5">
                <button onClick={prevSlide} className="bg-purple-800 text-white rounded-xl px-3 ml-3">
                  ❮
                </button>
                <button onClick={nextSlide} className="bg-purple-800 text-white rounded-xl px-3 mr-3">
                  ❯
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-20 h-screen bg-gray-500" onClick={() => navigate("/")} />
    </div>
  );
};

export default InnerProject;
