import { useState } from "react";
import {useForm} from "react-hook-form";






export function TestForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (id) => {
      
        fetch(
            'http://localhost:4444/pokepo/insert', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name:id.name,
                    parti:id.parti
                })
            }
        )
      //console.log(data);
      /*Coder ici pour préparer l'appel réseau POST avec FETCH !*/
      //On peut transformer les données en JSON pour les envoyer dans notre appel
      //JSON.stringify(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <select multiple {...register("parti[]", { required: true })}>
          <option value="extrême droite">extrême droite</option>
          <option value="droite">droite</option>
          <option value="centre">centre</option>
          <option value="gauche">gauche</option>
          <option value="extrême gauche">extrême gauche</option>
        </select>
        <button type="submit">Valider</button>
      </form>
    );
  }