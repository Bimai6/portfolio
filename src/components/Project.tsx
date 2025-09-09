import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReposProps } from "../types/props";

const Project = ({ repos }: ReposProps) => {
  const [hoveredRepo, setHoveredRepo] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-start w-full h-5/6 mb-28">
      {repos.map((repo) => (
        <div
          key={repo.name}
          className="hover:bg-white hover:cursor-pointer hover:text-purple-800 flex flex-row items-end justify-between w-full h-1/6 text-white border-b border-white"
          onMouseEnter={() => setHoveredRepo(repo.name)}
          onMouseLeave={() => setHoveredRepo(null)}
          onClick={() => navigate(`/project/${repo.name}`)}
        >
          <p className={`pl-4 pr-10 ${hoveredRepo === repo.name ? "text-lg" : "text-6xl"} font-extrabold pb-7`}>
            {hoveredRepo === repo.name ? repo.description ?? repo.formattedTitle : repo.formattedTitle}
          </p>
          <p className="pr-6 text-2xl pb-7">{repo.formattedDate}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;
