import {useForm} from "react-hook-form";
import PrintSorted from "./PrintSortedPokepo";

export function SortForm(){
    const { register, handleSubmit } = useForm();
    const onSubmit = (search) => {
        console.log(search)
        return (<PrintSorted parti={search}/>)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("search")} placeholder="filtrer par parti" />
        <button type="submit">Valider</button>
        </form>
    );
}