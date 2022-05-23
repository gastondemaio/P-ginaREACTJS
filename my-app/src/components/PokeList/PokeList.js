import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import PokeCard from '../PokeCard/PokeCard';
import { Link } from 'react-router-dom';



const PokeList = () => {
    const [pokes, setPokeList] = useState([]);

    useEffect(() => {
      axios('https://pokeapi.co/api/v2/pokemon').then((res) =>
        setPokeList(res.data)
      );
    }, []);

  return (
    <div>
      <h1>Poke List</h1>
      <div className='List-container'>
      {pokes.map((poke) => {
        return (
          <div key={poke.poke_id}>
            <Link to={`/detail/&{poke.poke_ability}`}>
              <PokeCard data={poke}/>
            </Link>
          </div>
        )
      })}
    </div>
    </div>
    
  )
};

export default PokeList;