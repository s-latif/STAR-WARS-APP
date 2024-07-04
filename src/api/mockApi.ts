import { getFromCache, setToCache } from '../utils/cache';

export const fetchTabs = async () => {
  return {
    "people": "https://swapi.py4e.com/api/people/",
    "planets": "https://swapi.py4e.com/api/planets/",
    "films": "https://swapi.py4e.com/api/films/",
    "species": "https://swapi.py4e.com/api/species/",
    "vehicles": "https://swapi.py4e.com/api/vehicles/",
    "starships": "https://swapi.py4e.com/api/starships/"
  };
};

export const fetchData = async (url: string) => {
  const cachedData = getFromCache(url);
  if (cachedData) {
    return cachedData;
  }

  const response = await fetch(url);
  const data = await response.json();
  setToCache(url, data);
  return data;
};