// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import { CORE_CONCEPTS, EXAMPLES } from './data';
import CoreConcept from './components/coreConcept/CoreConcept';
import Header from './components/header/Header';
import TabButton from './components/tabButton/TabButton';

import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {
              Object.keys(EXAMPLES).map((key) => {
                return <TabButton
                  isSelected={selectedTopic===key}
                  onSelect={() => handleSelect(key)}
                >
                  {EXAMPLES[key].title}
                </TabButton>
              })
            }
          </menu>
          {
            !selectedTopic ? <p>Please select a topic.</p> :
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3><p>{EXAMPLES[selectedTopic].description}</p><pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
