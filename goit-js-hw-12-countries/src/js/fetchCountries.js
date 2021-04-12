import notifications from "./notifications"

    export default function fetchCountries(searchQuery){
    
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => response.json())
        .catch(error => {
            notifications.requestIncomplete(error)
        })
}

