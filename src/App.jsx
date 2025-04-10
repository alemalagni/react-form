import { useState } from "react";
import Article from "./components/Article";

function App() {

  const [articoli, setArticoli] = useState([
    "Articolo 1",
    "Articolo 2",
    "Articolo 3"
  ]);

  const [newArticle, setNewArticle] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setArticoli([...articoli, newArticle]);
    setNewArticle('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={newArticle}
          onChange={e => { setNewArticle(e.target.value) }}
        />

      </form>
      {articoli.map((item) => (
        <Article
          key={item}
          text={item}
        />
      ))}
    </>
  );
}

export default App;