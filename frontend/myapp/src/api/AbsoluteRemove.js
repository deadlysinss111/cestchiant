function AbsoluteRemove(id){
    fetch(
        'http://localhost:4444/pokepo/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:id.name
            })
        }
    )
}

export default AbsoluteRemove;