import fetchCountries from'./fetchCountries.js'
import createTemplate from '../templates/template.hbs'
import listOfCountries from '../templates/listOfCountries.hbs'
import notifications from './notifications.js'
import debounce from 'lodash.debounce'

const refs = {
    input: document.querySelector('input'),
    countriesList: document.querySelector('.countriesList'),
}

function onSearch(e){
    const searchQuery = e.target.value;
    fetchCountries(searchQuery)
        .then((results) => {
            console.log(results);
            if(results.length === 1){
                refs.countriesList.innerHTML = createTemplate(results); 
            }
            else if(results.length >=2 && results.length<10){
                refs.countriesList.innerHTML = listOfCountries(results);
            }
            else if (results.length > 10){
                notifications.requestIncomplete();
            }
    })
}
refs.input.addEventListener('input', debounce(onSearch, 500))   






