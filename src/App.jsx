// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import reactCoreConceptsImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
        <img src={reactCoreConceptsImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          { description } React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
}

function CoreConcept({ title, description, image }) {
  return (<li>
    <img src={image} alt={title} />
      <h3>{ title }</h3>
      <div>{ description }</div>
  </li>);
}

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
