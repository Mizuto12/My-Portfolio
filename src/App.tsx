import { ThemeProvider } from './context/ThemeContext';
import { GengarTakeover } from './components/GengarTakeover';
import { GhostField } from './components/GhostField';
import { SectionDivider } from './components/SectionDivider';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Involvement } from './components/Involvement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <GhostField />
      <Nav />
      <main id="main">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Involvement />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <GengarTakeover />
    </ThemeProvider>
  );
}

export default App;
