import Project from "./Project";
import { socialLinks } from "../data/socialLinks";
import "/src/styles.css";
import { ReposProps } from "../types/props";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ProjectList = ({ repos }: ReposProps) => {
  const [shouldAnimateProjects, setShouldAnimateProjects] = useState(false);
  const [shouldAnimateIcons, setShouldAnimateIcons] = useState(false);

  useEffect(() => {
    const projectsAnimated = sessionStorage.getItem("projectsAnimated") === "true";
    if (!projectsAnimated) {
      setShouldAnimateProjects(true);
    }
  }, []);

  const handleProjectsComplete = () => {
    sessionStorage.setItem("projectsAnimated", "true");
    setTimeout(() => setShouldAnimateIcons(true), 200);
  };

  return (
    <div className="flex flex-col order-2 lg:order-1 bg-purple-800 h-screen w-full pb-6">
      <Project
        repos={repos}
        shouldAnimate={shouldAnimateProjects}
        onAnimationComplete={handleProjectsComplete}
      />

      <div className="flex gap-6 mt-6 justify-start">
        {socialLinks.map(({ alt, image, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            {shouldAnimateProjects ? (
              <motion.img
                className="w-30 cursor-pointer"
                initial={{ scale: 0, opacity: 0 }}
                animate={shouldAnimateIcons ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, delay: index * 0.2 }}
                whileHover={{ scale: 1.2 }}
                src={image}
                alt={alt}
              />
            ) : (
              <img className="w-30 cursor-pointer hover:scale-110 transition-transform duration-300" src={image} alt={alt} />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
