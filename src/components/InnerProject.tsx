import { useParams, useNavigate } from "react-router-dom";
import { Repo } from "../fetch/Fetch";
import { handleDate, handleTitle } from "../utils/FixedFields";
import { useEffect, useState } from "react";

interface InnerProjectProps {
  repos: Repo[];
}

const InnerProject = ({ repos }: InnerProjectProps) => {
  const { repoName } = useParams();
  const navigate = useNavigate();
  const [repo, setRepo] = useState<Repo | null>(null);

  useEffect(() => {
    if (repoName) {
      const selectedRepo = repos.find((repo) => repo.name === repoName);
      setRepo(selectedRepo ?? null);
    }
  }, [repoName, repos]);

  if (!repo) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-full h-screen bg-white text-purple-800">
        <div className="flex flex-row justify-between items-end bg-purple-800 text-white pt-7 pb-7">
          <p className="font-extrabold pl-15 text-6xl">{handleTitle(repo.name)}</p>
          <p className="pr-10 text-2xl">{handleDate(repo.created_at)}</p>
        </div>
      </div>
      <div className="w-20 h-screen bg-gray-500" onClick={() => navigate("/")}></div>
    </div>
  );
};

export default InnerProject;
