import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import "./filme-info.css";
import api from "../../services/api.js";

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      if (response.data.lenght === 0) {
        history.replace("/");
        return;
      }
      setFilme(response.data);
      setLoading(false);
    }
    loadFilme();
    return () => {
      console.log("COMPONENTE DESMONTADO");
    };
  }, [history, id]);
  
  function salvaFilme(){
    const minhaLista = localStorage.getItem('filmes')
    
    let filmesSalvos =   JSON.parse(minhaLista) || []

    const hasFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id)

    if(hasFilme){
      alert('esse filme ja foi salvo')
      return
    }

    filmesSalvos.push(filme)
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
    alert('filme salvo com sucesso')
  }
  if (loading) {
    return (
      <div className="filme-info">
        <h1>Pagina Filme --- {id}</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />

      <h3>Sinopse</h3>
      {filme.sinopse}
      <div>
        <button onClick={salvaFilme}>Salvar</button>
        <button>
          <a
            href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
