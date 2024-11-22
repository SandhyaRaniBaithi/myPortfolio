import Intro from './Components/Intro/intro';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/skills.js';
import Works from './Components/Works/works.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/footer.js';
// import ProjectCard from './Components/ProjectCard/ProjectCard.jsx';
import Project from './Components/ProjectCard/Project.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
