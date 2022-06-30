import './App.css';
import metals from './metals';
import Element from '../Element/Element';

function App() {
  const procedures = `Flame tests and chemical tests are used to detect and identify ions in samples. Instrumental methods of analysis are faster, and more accurate and more sensitive than simple chemical tests.
  
  Different metal ions produce different flame colours when they are heated strongly. This is the basis of flame tests. To carry out a flame test:

  dip a clean wire loop into a solid sample of the compound being tested

  put the loop into the edge of the blue flame from a Bunsen burner

  observe and record the flame colour produced
  `
  function showProcedures() {
    alert(procedures)
  };

  return (
    <div className="container">
      <h1>FLAME TESTS</h1>
      {metals.map((metal, index) => (
        <Element
          key={index}
          name={metal.name}
          atomicNumber={metal.atomicNumber}
          flameColor={metal.color}
          showProcedures={showProcedures}
        />
      ))}
    </div>
  );
}

export default App;
