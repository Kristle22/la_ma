import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/medziai').then((res) => {
      setTrees(res.data);
    });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>MEDZIAI</h2>
        {trees.map((tree) => (
          <div key={tree.id}>{tree.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
