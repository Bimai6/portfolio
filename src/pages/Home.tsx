import Poster from "../components/Poster";
import ProjectList from "../components/ProjectList";
import { ReposProps } from "../types/props";

const Home = ({ repos }: ReposProps) => {
  return (
    <div className="flex flex-row h-full">
      <ProjectList repos={repos} />
      <Poster />
    </div>
  );
};

export default Home;
