import { searchCocktailsByName } from './api'

export function makeSearch(query) {
  const cocktailName = query;
  return searchCocktailsByName(cocktailName)
}