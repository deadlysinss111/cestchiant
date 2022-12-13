function RemoveFromPokedex(name){
    fetch(
        'http://localhost:4444/polidex/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:name
            })
        }
    )
}

export default RemoveFromPokedex;