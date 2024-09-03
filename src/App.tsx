import "./App.css";
import "./style/navBar.css";
import "./style/header.css";
import "./style/project.css";
import "./style/workEx.css";
import "./style/contactModal.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import WorkExs from "./pages/WorkExs";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <WorkExs />
      <Projects />
    </>
  );
};

export default App;
