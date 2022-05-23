import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import PokeCard from '../components/PokeCard/PokeCard'
import axios from 'axios'


const PokeDetails = () => {
    let id = useParams();
    console.log("abilidad del personaje", id)
    let userID = id.id;

    const [pokes, setPokeDetails] = useState([]);

    useEffect(() => {
      axios(`https://pokeapi.co/api/v2/pokemon/${userID}`).then((res) =>
        setPokeDetails(res.data)
      );
    }, [userID]);

  return (
    <div>
        <h1>Poke List</h1>
        <div className='PokeList-container'></div>
            {pokes.map((poke) => {
                return (
                    <div key={poke.poke_id}>
                      <Link to={`/detail/${poke.poke_id}`}>
                        <PokeCard data={poke} />
                      </Link> 
                    </div>
                )
            })}
    </div>
  )
}

export default PokeDetails