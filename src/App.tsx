import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { LearningDirection } from './components/LearningDirection';
import { Conclusion } from './components/Conclusion';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Main Layout Contents */}
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <LearningDirection />
        <Conclusion />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
};

export default App;
