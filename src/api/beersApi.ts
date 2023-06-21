export async function fetchBeers(page: number, perPage: number) {
  const response = await fetch(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
  );
  const data = await response.json();
  return data;
}

export async function fetchBeerDetails(beerId: string) {
  const response = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`);
  const data = await response.json();
  return data[0];
}
