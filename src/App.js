import Header from './components/headers'
import Profile from './components/profile'
import Skills from './components/skills'
import Timeline from './components/career'
import Projects from './components/projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Skills />
      <Timeline />
      <Projects />
    </div>
  );
}

export default App;
