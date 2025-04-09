import { useState } from "react";
import Articoli from "./Articoli"
import Article from "./components/Article"

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
}

export default App;