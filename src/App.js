// import "./App.css";
import "./App.min.css";
import ProjectViewer from "./components/projectsview/ProjectsView";
import MainView from "./components/MainView";
import CaseStudyView from "./components/casestudyview/CaseStudyView";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<MainView />} />
          <Route path="/project/:id" element={<ProjectViewer />} />
          <Route path="/case-study/MyFlix" element={<CaseStudyView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
