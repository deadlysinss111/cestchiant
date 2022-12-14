import {useForm} from "react-hook-form";
import PrintAll from "./PrintAll";






export function SortInPokepo() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (value) => {
        return<>
            <PrintAll sort={fetch(
            `http://localhost:4444/pokepo/filter/${value}`, {
                method: 'GET', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                }
            }
        )}/>; {window.location.reload(false)}
        </>
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("item")} placeholder="filter by parti" />
        <button type="submit">Valider</button>
      </form>
    );
  }