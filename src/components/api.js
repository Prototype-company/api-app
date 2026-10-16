const BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchCharacters(page = 1) {
  const params = new URLSearchParams({page});
  const responce = await fetch(`${BASE_URL}/character?${params}`);
  const data = await responce.json();

  if (!responce.ok) {
    throw new Error(`Error fetching: ${responce.status}`);
  }
  return data;
}
