import React, { useState, useEffect } from 'react';
import Pokemon from '../components/Pokemon/Pokemon';
import Loader from '../components/Loader/Loader';
import NotFound from '../components/NotFound/NotFound';
import {getPokemon} from '../services/PokeAPI';

const Results = ({params}) => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(false);

    //Get the pokemon
    useEffect(()=>{
        setLoading(true);
        getPokemon(params.key)
            .then(res => {
            if(res !== "Pokemon not found"){
                setPokemon(res);
                setError(false);
                setLoading(false);
            }else{
                setError(res);
                setLoading(false);
            }                
            });
    }, [params.key]);

    return (
        <div className="container">
            {loading ? <Loader/> 
            :error ? <NotFound error={error}/>
            : <Pokemon pokemon={pokemon}/>}
        </div>
    );
};

export default Results;