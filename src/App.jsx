import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Land from './components/Land/Land';
import Project from './components/Project/Project';
import Tools from './components/Tools/Tools';
import Words from './components/Words/Words';

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