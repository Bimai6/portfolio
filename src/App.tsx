import Poster from "./components/Poster"
import ProjectList from "./components/ProjectList"
import "./styles.css"

function App() {

  return (
      <div className="flex flex-row">
        <ProjectList />
        <Poster />
      </div>
  )
}

export default App