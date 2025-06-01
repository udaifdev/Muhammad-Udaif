import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Land from './component/Land/Land';
import Project from './component/Project/Project';
import Tools from './component/Tools/Tools';
import Words from './component/Words/Words';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Land />
        </section>
        <section id="words">
          <Words />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="skills">
          <Tools />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;