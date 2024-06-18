import Header from './components/headers'
import Profile from './components/profile'
import Skills from './components/skills'
import Timeline from './components/career'
import Projects from './components/projects'
import Contact from './components/contact'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section id='profile'>
        <Profile />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='timeline'>
        <Timeline />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
