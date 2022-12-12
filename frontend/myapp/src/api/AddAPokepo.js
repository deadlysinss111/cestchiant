import { useState } from "react";
import {useForm} from "react-hook-form";



function toggle(value){
    console.log(!value);
    return !value;
  }


export function TestForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (id) => {
        //if(id.centre==true){const partiInArray = ["centre", id.part]; console.log("ok")}else{const partiInArray = [id.part]; console.log("notOk")};
        fetch(
            'http://localhost:4444/pokepo/insert', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name:id.name,
                    //parti:partiInArray
                })
            }
        )
      //console.log(data);
      /*Coder ici pour préparer l'appel réseau POST avec FETCH !*/
      //On peut transformer les données en JSON pour les envoyer dans notre appel
      //JSON.stringify(data);
    }
  
    const [checked, setChecked] = useState(false);
    let centre = false
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <select {...register("parti", { required: true })}>
          <option value="extrême droite">extrême droite</option>
          <option value="droite">droite</option>
          <option value="gauche">gauche</option>
          <option value="extrême gauche">extrême gauche</option>
        </select>
        <label htmlFor="lastName">centre</label>
        <input type="checkbox" {...register("centre")} onChange={
            () => setChecked(toggle)
            } />
        <button type="submit">Valider</button>
      </form>
    );
  }