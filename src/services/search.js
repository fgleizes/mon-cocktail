import { searchByName } from './api'

export function makeSearch(query) {
  const cockatailName = query;
  return searchByName(cockatailName)
}