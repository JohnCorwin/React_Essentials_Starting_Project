import reactCoreConceptsImg from '../../assets/react-core-concepts.png';

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

export default Header;