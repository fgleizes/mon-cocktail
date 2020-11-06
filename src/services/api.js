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
            // const results = []
            // for (let i = 0; i < drinks.length; i++) {
            //     const { idDrink, strDrink, strDrinkThumb } = drinks[i];
            //     results.push({
            //         id: idDrink,
            //         name: strDrink,
            //         previewURL: strDrinkThumb + '/preview'
            //     })
            // }

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
        // .then((drinks) => {
        //     const results = drinks.map((drink) => {
        //         const { idDrink, strDrink, strDrinkThumb } = drink;
        //         return {
        //             id: idDrink,
        //             name: strDrink,
        //             previewURL: strDrinkThumb,
        //         }
        //     })

        //     return results
        // })
        .catch((error) => {
            // console.log("error " + error)
            return
        })
}