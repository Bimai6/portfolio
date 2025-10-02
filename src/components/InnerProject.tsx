import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import { ReposProps } from "@/types/props";
import { techs } from "@/data/techs";
import LinkButton from "@/components/LinkButton";
import SlideButton from "@/components/SlideButton";
import mediumZoom from "medium-zoom";
import HomeButton from "./HomeButton";

const InnerProject = ({ repos }: ReposProps) => {
  const { repoName } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!repoName) {
      setLoading(false);
      return;
    }

    const selectedProject = repos.find((r) => r.name === repoName) || null;
    setProject(selectedProject);
    setLoading(false);
  }, [repoName, repos]);

  useEffect(() => {
    if (!loading && !project) {
      navigate("/");
    }
  }, [loading, project, navigate]);

  useEffect(() => {
    if (!project || !project.images?.length) return;

    const zoom = mediumZoom(`.zoomable-${currentIndex}`, {
      background: "rgba(0, 0, 0, 0.8)",
      margin: 24,
    });

    return () => {zoom.detach()};
  }, [project, currentIndex]);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (!project) return null;

  const images = project.images || [];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen overflow-x-hidden">
      <div className="order-2 lg:order-1 flex flex-col h-auto w-full bg-white text-purple-800 box-border">
        <div className="flex flex-row justify-between items-end bg-purple-800 text-white py-7 px-10">
          <p className="font-extrabold text-4xl sm:text-5xl md:text-6xl">{project.formattedTitle}</p>
          <p className="hidden lg:flex text-2xl">{project.formattedDate}</p>
        </div>

        <div className="flex flex-col lg:flex-row border-b border-purple-800">
          <div id="carousel" className="w-full lg:w-4/6 lg:border-r border-b lg:border-b-0 border-purple-800">
            <div className="overflow-hidden h-[450px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${index === currentIndex ? "block" : "hidden"} h-full flex justify-center transition-all duration-700 ease-in-out`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`zoomable zoomable-${index} hover:cursor-zoom-in mt-5 h-full max-w-[90%] object-contain`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 my-5">
              <SlideButton event={prevSlide} char="❮" />
              <SlideButton event={nextSlide} char="❯" />
            </div>
          </div>

          <div className="flex flex-col h-full w-full lg:w-3/6">
            <div className="flex flex-col w-full pl-5 border-b border-purple-800 h-5/6">
              <p className="mb-8 pt-12 pl-5 lg:pl-0 text-4xl">Achievements:</p>
              <ul className="flex flex-col justify-self-center pb-10 lg:pb-5 w-full h-full">
                {project.achievements?.map((achievement, i) => (
                  <li
                    key={i}
                    className="list-disc list-inside px-5 pb-4 md:pb-7 lg:pb-5 xl:pb-2 text-xl md:text-2xl lg:text-xl xl:text-2xl"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row justify-center items-center py-15 lg:py-5 gap-10 w-full h-10 lg:h-1/6">
              {project.deployment && <LinkButton url={project.deployment} text="Demo" />}
              <LinkButton url={project.html_url} text="Code" />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center p-10 gap-4 flex-wrap h-full">
          <p className="text-4xl w-full mb-5">Stacks:</p>
          <div className="grid mb-30 lg:mb-0 lg:flex grid-cols-3 md:pl-15 justify-center w-5/6 gap-5 lg:gap-3 xl:gap-5">
            {project.stack?.map((techName) => {
              const tech = techs[techName];
              return tech ? (
                <img
                  key={techName}
                  src={tech.logo}
                  alt={techName}
                  title={techName}
                  className="md:h-30 md:w-30 lg:h-23 lg:w-23 xl:h-28 xl:w-28 2xl:h-30 2xl:w-30"
                />
              ) : null;
            })}
          </div>
        </div>
      </div>

      <div
        className="order-2 transition-all duration-200 ease-in-out py-3 hover:w-25 hover:text-5xl hover:cursor-pointer min-h-screen bg-gray-500 hidden lg:flex justify-center items-center text-white text-4xl w-20"
        onClick={() => navigate("/")}
      >
        ❯
      </div>

      <HomeButton />
    </div>
  );
};

export default InnerProject;
