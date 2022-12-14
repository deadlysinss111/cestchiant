import { useState } from "react";
import {useForm} from "react-hook-form";
import PrintSorted from "./PrintSortedPokepo";
import { Button } from "react-bootstrap";


export function SortForm(){
    const { register, handleSubmit } = useForm();
    const [ search, setSearch ] = useState("");
    const onSubmit = (data) => {
        console.log(data);
        setSearch(data.parti)
    }
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("parti", { required: true })}>
              <option value="extrême droite">extrême droite</option>
              <option value="droite">droite</option>
              <option value="centre">centre</option>
              <option value="gauche">gauche</option>
              <option value="extrême gauche">extrême gauche</option>
            </select>
            <Button variant="warning" type="submit">submit</Button>
        </form>
        {search.length>0?<PrintSorted parti={search}/>:null}
        </>
    );
}