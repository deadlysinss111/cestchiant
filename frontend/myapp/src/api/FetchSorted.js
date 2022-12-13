
export const getSorted = async (value) => {
    const response = await fetch(
        `http://localhost:4444/pokepo/filter/${value}`, {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}