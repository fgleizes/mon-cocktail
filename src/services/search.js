import { searchCocktailsByName, searchCocktailDetailsById } from './api'

export function makeSearch(query) {

  if(typeof query === "string"){
    const cocktailName = query;
    return searchCocktailsByName(cocktailName)
  }
  if(typeof query === "number"){
    const cocktailId = query;
    return searchCocktailDetailsById(cocktailId)
  }
}