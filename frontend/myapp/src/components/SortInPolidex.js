import {useForm} from "react-hook-form";






export function SortInPokepo() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (value) => {
      
        fetch(
            `http://localhost:4444/polidex/filter/${value}`, {
                method: 'GET', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
            }
        )
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("item")} placeholder="type name:<name you want> or parti:<parti you want>" />
        <button type="submit">Valider</button>
      </form>
    );
  }