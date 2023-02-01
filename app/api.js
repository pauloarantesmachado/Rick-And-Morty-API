
 async function getApiCharacter(){
    const request = await fetch(`https://rickandmortyapi.com/api/character/`);
    const convertRequest =  await request.json()
    return convertRequest.results
}

async function filterCharacter(value){
    const connection = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);
    const convertedConnection = await connection.json();
    return convertedConnection.results;
};


export const api = {
    getApiCharacter,
    filterCharacter
};