import { useState } from "react";
import Article from "./components/Article";

const Articoli = [
  "Articolo 1",
  "Articolo 2",
  "Articolo 3"
]

function App() {

  const [newArticle, setNewArticle] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    nuovoArticolo(newArticle)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={newArticle}
          onChange={e => { setNewArticle(e.target.value) }}
        />

      </form>
      {Articoli.map((item) => (
        <Article
          key={item}
          text={item}
        />
      ))}
    </>
  );
}

function nuovoArticolo(newArticle) {
  console.log(newArticle);
  Articoli.push(newArticle);
  App
}

export default App;