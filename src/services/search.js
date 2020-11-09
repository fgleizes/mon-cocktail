import { searchCocktail } from './api'

export function makeSearch(query) {
  const cockatailName = query;
  return searchCocktail(cockatailName)
}