import { useEffect, useState } from "react";
import AddToPokedex from "../api/AddToPokedex";
import { Alert, Button } from 'react-bootstrap';
import { getSorted } from "../api/FetchSorted";
import PrintAll from "./PrintAll";


function PrintSorted(props){
    const [ pokemons, setPokemons ] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFail, setShowFail] = useState(false);

    function random(pokemon){
        const chance = pokemon.chance;
        const foo = Math.random() * 100;
        if (foo < chance){
            AddToPokedex(pokemon);
            setShowSuccess(pokemon)
            setShowFail(false)
        }else{
            setShowSuccess(false)
            setShowFail(pokemon)
        }
        
    }

    useEffect(() => {
        const pokemonsFetched = getSorted(props.parti);
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[props]);
    return <div className="pokemon-list">
        <div>
        {
            pokemons.map((pokemon,key) =>{
                return <><div key={key} className="bloc-pokemon">
                    <br></br>
                    <img id="imageu" src={pokemon.image} />
                    <br></br>
                    <br></br>
                    <h2>{pokemon.name}</h2>
                    <br></br>
                    <p>{pokemon.parti}</p>
                    <Button onClick={()=>random(pokemon)}>Capturer !</Button>
                    {showFail==pokemon?<Alert key="danger" variant="danger">Failed !</Alert>:null}
                    {showSuccess==pokemon?<Alert key="success" variant="success">Captured !</Alert>:null}
                </div>
                </>
            })
        }
        </div>
        <Alert variant="secondary">Voilà tous les pokepo de {props.parti}</Alert>
    </div>;
}

export default PrintSorted;