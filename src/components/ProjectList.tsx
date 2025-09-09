import Project from "./Project";
import { socialLinks } from "../data/socialLinks";
import "/src/styles.css";
import { ReposProps } from "../types/props";

const ProjectList = ({ repos }: ReposProps) => {
  return (
    <div className="bg-purple-800 h-screen w-full md:w-2/3 flex flex-col justify-end pb-6">
      <Project repos={repos} />
      <div className="flex gap-4">
        {socialLinks.map(({ alt, image, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-20 hover:scale-110 transition-transform duration-300 cursor-pointer"
              src={image}
              alt={alt}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
