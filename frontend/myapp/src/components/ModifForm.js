import { Button } from "react-bootstrap";
import {useForm} from "react-hook-form";

export function ModifForm(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (id) => {
        fetch(
            'http://localhost:4444/pokepo/updateName', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name:props.pokemon.name,
                    to:id.name
                })
            }
        )
        fetch(
            'http://localhost:4444/pokepo/updateParti', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name:props.pokemon.name,
                    to:id.parti
                })
            }
        )
        fetch(
            'http://localhost:4444/pokepo/updateChance', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name:props.pokemon.name,
                    to:id.chance
                })
            }
        )
        fetch(
            'http://localhost:4444/pokepo/updateImage', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name:props.pokemon.name,
                    to:id.image
                })
            }
        )
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={props.pokemon.name} {...register("name")} placeholder="Name" />
        <select defaultValue={props.pokemon.parti} multiple {...register("parti[]", { required: true })}>
          <option value="extrême droite">extrême droite</option>
          <option value="droite">droite</option>
          <option value="centre">centre</option>
          <option value="gauche">gauche</option>
          <option value="extrême gauche">extrême gauche</option>
        </select>
        <input defaultValue={props.pokemon.chance} {...register("chance")} placeholder="Chance" />
        <input defaultValue={props.pokemon.image} {...register("image")} placeholder="Image" />
        <Button variant="warning" type="submit">Modifier</Button>
      </form>
    );
  }