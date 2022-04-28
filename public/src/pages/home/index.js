import  {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import api from '../../services/api.js'
import './home.css'

export default function Home() {

  const [filmes, setFilmes] = useState([])

  useEffect (() => {
    async function loadFilmes (){
      const responce = await api.get('r-api/?api=filmes/')
      setFilmes(responce.data)
    }
    loadFilmes()
  },[])
                           
    return(
      <div className='container'>
        <div className='lista-filmes'>
          {filmes.map((filmes)=>{
            return(
              <article key={filmes.id}>
                <strong>{filmes.nome}</strong>
                <img src={filmes.foto} alt={filmes.nome}/>
                <Link to={`/filme/${filmes.id}`}>Acessar</Link>


              </article>
            )

          })}
        </div>
        
      </div>
    )
  
  }