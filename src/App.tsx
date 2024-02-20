import { useEffect, useState } from 'react';
import './App.css';
import ThreeByThree from './components/3by3';

const App = () => {
  const [name, setName] = useState<string>();

  useEffect(() => {
    setName('고현림');
  }, []);

  return (
    <div>
      <p>{name}의 만다라트</p>
      <ThreeByThree type="rootNode" />
      <ThreeByThree type="leafNode" />
    </div>
  );
};

export default App;
