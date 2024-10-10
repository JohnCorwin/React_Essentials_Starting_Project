// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import CoreConceptSection from './components/coreConceptSection/CoreConceptSection';
import Examples from './components/examples/Examples';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptSection />
        <Examples />
      </main>
    </div>
  );
}

export default App;
