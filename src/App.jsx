import Articoli from "./Articoli"
import Article from "./components/Article"

export default function App() {
  return (
    <>
      {Articoli.map((item) => (
        <Article
          text={item}
        />
      ))}
    </>
  );
}