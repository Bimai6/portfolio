import Project from "./Project";
import { socialLinks } from "@/data/socialLinks";
import "@/styles.css";
import { ReposProps } from "@/types/props";
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
    <div className="flex flex-col order-2 lg:order-1 bg-purple-800 h-full lg:h-screen w-full">
      <Project
        repos={repos}
        shouldAnimate={shouldAnimateProjects}
        onAnimationComplete={handleProjectsComplete}
      />

      <div className="flex gap-4 lg:ml-4 mt-20 mb-10 lg:mb-0 justify-center lg:justify-start">
        {socialLinks.map(({ alt, image, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            {shouldAnimateProjects ? (
              <motion.img
                className="w-20 md:w-30 cursor-pointer"
                initial={{ scale: 0, opacity: 0 }}
                animate={shouldAnimateIcons ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, delay: index * 0.2 }}
                whileHover={{ scale: 1.2 }}
                src={image}
                alt={alt}
              />
            ) : (
              <img className="w-20 md:w-30 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in" src={image} alt={alt} />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
