import Poster from "../components/Poster";
import ProjectList from "../components/ProjectList";
import { Repo } from "../fetch/Fetch";

interface HomeProps {
  repos: Repo[];
}

const Home = ({ repos }: HomeProps) => {
  return (
    <div className="flex flex-row">
      <ProjectList repos={repos} />
      <Poster />
    </div>
  );
};

export default Home;
