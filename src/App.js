import React, { useEffect, useState } from "react";
import './App.css'
function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        })
        .catch((error) => {
          console.error("Erro ao carregar API:", error);
        });
    }
    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>MAZI NUTRI</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao" href="#">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App; 
