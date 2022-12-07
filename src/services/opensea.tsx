export async function fetchCollections() {
  return fetch(
    "https://api.opensea.io/api/v1/collections?offset=0&limit=20"
  ).then((response) => response.json());
}
