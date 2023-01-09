import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './HomePage';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <HomePage />
  );
};

export default App;
