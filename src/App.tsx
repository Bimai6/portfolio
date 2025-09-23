import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRepos } from "@/services/githubService";
import { Repo } from "@/models/Repo";
import Home from "@/pages/Home";
import InnerProject from "@/components/InnerProject";

const App = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const data = await getRepos();
        const sortedRepos = data.sort(
          (a, b) =>
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
        );
        setRepos(sortedRepos);
      } catch (error) {
        console.error("Error al obtener repositorios:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home repos={repos} />} />
        <Route
          path="/project/:repoName"
          element={<InnerProject repos={repos} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
