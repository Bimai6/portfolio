import "/src/styles.css";
import { ImageLinks } from "../utils/ImageLinks";
import Project from "./Project";

const Links = [
    {url: "https://github.com/Bimai6", img: ImageLinks.github, alt:"Github Logo"},
    {url: "https://es.linkedin.com/in/mario-lebrero-garc%C3%ADa-05596a251?trk=org-employees", img: ImageLinks.linkedin, alt:"Linkedin Logo"}
]

const ProjectList = () => {
    return (
        <div className="bg-purple-800 h-screen w-full md:w-2/3 flex flex-col justify-end pb-6">
            <Project/>
            <div className="flex gap-4">
                {Links.map(({url, img, alt}, index) => (
                    <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                    <img className="w-20 hover:scale-110 transition-transform duration-300 cursor-pointer"
                        src={img}
                        alt={alt} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
