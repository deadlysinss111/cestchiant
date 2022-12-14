
function RemoveFromPokedex(item){

    fetch(
        'http://localhost:4444/polidex/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:item
            })
        }
    )
}

export default RemoveFromPokedex;