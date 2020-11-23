import axios from 'axios';

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

export function searchCocktailsByName(name) {
    const URL = API_URL + "search.php?s=" + name

    return axios.get(URL)
        .then(function (response) {
            // handle success
            const drinks = response.data.drinks
            return drinks
        })
        .then((drinks) => {
            const results = drinks.map((drink) => {
                const { idDrink, strDrink, strDrinkThumb } = drink;
                return {
                    id: idDrink,
                    name: strDrink,
                    previewURL: strDrinkThumb + '/preview'
                }
            })

            return results
        })
        .catch((error) => {
            return []
        })
}

export function searchCocktailDetailsById(id) {
    const URL = API_URL + "lookup.php?i=" + id

    return axios.get(URL)
        .then(function (response) {
            const drinkDetails = response.data.drinks[0]
            return drinkDetails
        })
        .then((drinkDetails) => {
            const ingredients = [];

            let i = 1
            while (drinkDetails["strIngredient" + i]) {
                const strIngredient = drinkDetails["strIngredient" + i];
                const strMeasure = drinkDetails["strMeasure" + i];
                ingredients.push({ name: strIngredient, quantity: strMeasure })
                i++
            }


            const result = {
                id: drinkDetails.idDrink,
                name: drinkDetails.strDrink,
                imageURL: drinkDetails.strDrinkThumb,
                previewURL: drinkDetails.strDrinkThumb + '/preview',
                tags: drinkDetails.strTags,
                category: drinkDetails.strCategory,
                alcoholic: drinkDetails.strAlcoholic,
                glass: drinkDetails.strGlass,
                instructions: drinkDetails.strInstructions,
                ingredients: ingredients
            }

            return result
        })
        .catch((error) => {
            return "error"
        })
}