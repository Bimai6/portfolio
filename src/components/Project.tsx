import { useNavigate } from "react-router-dom";
import { ProjectProps } from "../types/props";
import { motion } from "framer-motion";
import { spring } from "../types/transitions";
import { useState } from "react";

const Project = ({ repos, shouldAnimate, onAnimationComplete }: ProjectProps) => {
  const navigate = useNavigate();
  const completedCountRef = { current: 0 };
  const [hoveredRepo, setHoveredRepo] = useState<string | null>(null);

  return (
    <div className="flex flex-col justify-start w-full h-5/6 mb-28">
      {repos.map((repo, index) => (
        <motion.div
          key={repo.name}
          initial={shouldAnimate ? { opacity: 0, x: -150 } : undefined}
          animate={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
          transition={shouldAnimate ? { ...spring, delay: index * 0.6 } : undefined}
          className={`hover:bg-white hover:cursor-pointer hover:text-purple-800 flex flex-row items-end justify-between w-full h-1/6 text-white ${
            hoveredRepo === repo.name ? "border-r border-purple-800" : "border-b border-white"
          }`}
          onMouseEnter={() => setHoveredRepo(repo.name)}
          onMouseLeave={() => setHoveredRepo(null)}
          onClick={() => navigate(`/project/${repo.name}`)}
          onAnimationComplete={() => {
            if (!shouldAnimate) return;
            completedCountRef.current += 1;
            if (completedCountRef.current === repos.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }}
        >
          <p className={`pl-4 pr-10 ${hoveredRepo === repo.name ? "text-lg" : "text-6xl"} font-extrabold pb-7`}>
            {hoveredRepo === repo.name ? repo.description ?? repo.formattedTitle : repo.formattedTitle}
          </p>
          <p className="pr-6 text-2xl pb-7">{repo.formattedDate}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Project;
