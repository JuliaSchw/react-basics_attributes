import React from "react";
import "./styles.css";

const myValue = "Hello World";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Article Title</h2>
      <label htmlFor="new-Article">Write something about Eurorack</label>
      <input id="new-Article" value={myValue} />
      <a className="article__link" href="https://intellijel.com/">
        Link
      </a>
    </article>
  );
}

export default function App() {
  return Article();
}
