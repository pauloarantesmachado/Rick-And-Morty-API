import { api } from "./api.js";
import card from "./card.js";

const button = document.querySelector('[data-button]');
let load =document.querySelector('[data-load]');


async function search(event){
    event.preventDefault();

    const inputData = document.querySelector('[data-search]').value;

    const inputSearch = await api.filterCharacter(inputData.toLowerCase());

    const list = document.querySelector("[data-list]");

    let textError = document.querySelector('[data-error]');

    console.log(inputData.toLowerCase());
    
    load.innerHTML = '<div class="loader"></div>';

    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
    textError.innerHTML= '';
   setTimeout( () => { 
        
    if(inputSearch == undefined || inputData === '' ){
        load.innerHTML = ''
        textError.innerHTML = '<h2 class="error">There is no such character</h2><img class="rick" src="image/rick.png"> <button class="back" data-back>Back</button>'
        const backButton = document.querySelector('[data-back]');
        backButton.addEventListener('click', () => window.location.reload());
        return
    }
    inputSearch.forEach(element => {
    list.appendChild(card(element))
    console.log(inputSearch);
    load.innerHTML = ''})}, "5000");
}

button.addEventListener('click', event => search(event))

