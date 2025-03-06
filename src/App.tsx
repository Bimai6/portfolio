import Poster from "./components/Poster"
import ProjectList from "./components/ProjectList"

function App() {

  return (
    <>
      <div className="d-flex flex-row">
        <ProjectList />
        <Poster />
      </div>
    </>
  )
}

export default App