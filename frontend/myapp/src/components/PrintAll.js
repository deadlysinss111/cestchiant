import { useEffect, useState } from "react";
import AddToPokedex from "../api/AddToPokedex";
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { getAll } from "../api/Fetch";
import { SortForm } from "./SortForm";




function PrintAll(){
    const [ pokemons, setPokemons ] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFail, setShowFail] = useState(false);

    function random(pokemon){
        const chance = pokemon.chance;
        const foo = Math.random() * 100;
        if (foo < chance){
            AddToPokedex(pokemon);
            setShowSuccess(true)
            setShowFail(false)
        }else{
            setShowSuccess(false)
            setShowFail(true)
        }
        
    }

    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <>
        <SortForm />
        {showFail?<Alert key="danger" variant="danger">Failed !</Alert>:null}
        {showSuccess?<Alert key="success" variant="success">Captured !</Alert>:null}
        <div className="pokemon-list">
            <div>
            {
                pokemons.map((pokemon,key) =>{
                    return <div key={key} className="bloc-pokemon">
                            <img src={pokemon.image} />
                            <h2>{pokemon.name}</h2>
                            <Button onClick={()=>{
                                random(pokemon);
                            }}>Capturer !</Button>
                    </div>
                })
            }
            </div>
        </div>;
    </>
}

export default PrintAll