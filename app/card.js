import { api } from "./api.js";

const list = document.querySelector("[data-list]");

export default function card(data){
    const cardRickAndMorty = document.createElement('div');
    cardRickAndMorty.className = 'character';
    const status = data.status
    cardRickAndMorty.innerHTML = `
    <img class="character__img" src=${data.image} alt="character"/>
    <div class="character__data">
        <h2 class="character__name">${data.name}</h2>
        <div class="${status}"></div>
        <p class="character__live">${status}-${data.species}</p>
        <p class="character__gender">gender:</p>
        <p class="character__dataGender">${data.gender}</p>
        <p class="character__location">location:</p>
        <p class="character__map">${data.location.name}</p>
        <p class="character__seen">Origin:</p>
        <p class="character__episode">${data.origin.name}</p>
        <p class="character__seen">Total episodes:</p>
        <p class="character__episode">${data.episode.length}</p>
    </div>`
    return cardRickAndMorty
}

async function listCard(){
    try{
    const listApi =  await api.getApiCharacter()
    listApi.forEach( e => list.appendChild(card(e)))}
    catch{
        list.innerHTML = '<h2 class="error">Unable to load character list</h2>'
    }
}

listCard()

