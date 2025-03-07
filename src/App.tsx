import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Fetch from "./fetch/Fetch";
import { Repo } from "./fetch/Fetch";
import Home from "./pages/Home";
import InnerProject from "./components/InnerProject";

const App = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    Fetch().then((data) => {
      const sortedRepos = data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      setRepos(sortedRepos);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home repos={repos} />} />
        <Route path="/project/:repoName" element={<InnerProject repos={repos} />} />
      </Routes>
    </Router>
  );
};

export default App;
