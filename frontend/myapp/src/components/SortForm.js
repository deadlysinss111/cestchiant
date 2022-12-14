import { useState } from "react";
import {useForm} from "react-hook-form";
import PrintSorted from "./PrintSortedPokepo";


export function SortForm(){
    const { register, handleSubmit } = useForm();
    const [ search, setSearch ] = useState("");
    const onSubmit = (data) => {
        console.log(data);
        setSearch(data.search)
    }
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("search")} placeholder="filtrer par parti" />
            <button type="submit">Valider</button>
        </form>
        {search.length>0?<PrintSorted parti={search}/>:null}
        </>
    );
}