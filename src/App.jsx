// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import { CORE_CONCEPTS } from './data';
import Header from './components/header/Header';
import CoreConcept from './components/coreConcept/CoreConcept';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            { CORE_CONCEPTS.map((concept) => {

              return <CoreConcept
                {...concept}
              />
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
