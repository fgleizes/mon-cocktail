import axios from 'axios';

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

export function searchCocktail(name) {
    const URL = API_URL + "search.php?s=" + name
    return axios.get(URL)
        .then(function (response) {
            // handle success
            const drinks = response.data.drinks
            return drinks
        })
        .then((drinks) => {
            const results = []
            for (let i = 0; i < drinks.length; i++) {
                const { idDrink, strDrink, strDrinkThumb } = drinks[i];
                results.push({
                    id: idDrink,
                    name: strDrink,
                    previewURL: strDrinkThumb + '/preview'
                })
            }

            return results
        })
        .catch((error) => {
            return []
        })
}