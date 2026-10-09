
const BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchCharacters() {
  const responce = await fetch(`${BASE_URL}/character`);
  const data = await responce.json();

  if (!responce.ok) {
    throw new Error(`Error fetching: ${responce.status}`)
  }
  return data;
}
