import Poster from "../components/Poster";
import ProjectList from "../components/ProjectList";
import { ReposProps } from "../types/props";

const Home = ({ repos }: ReposProps) => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <ProjectList repos={repos} />
      <Poster />
    </div>
  );
};

export default Home;
