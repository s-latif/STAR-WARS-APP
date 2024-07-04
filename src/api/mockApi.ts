// src/api/mockApi.ts
export const fetchStarWarsData = async () => {
    return [
      { id: 1, name: 'Luke Skywalker', role: 'Jedi Knight', image: 'https://via.placeholder.com/150/0000FF/808080?text=Luke+Skywalker' },
      { id: 2, name: 'C-3PO', role: 'Protocol Droid', image: 'https://via.placeholder.com/150/FFD700/000000?text=C-3PO' },
      { id: 3, name: 'R2-D2', role: 'Astromech Droid', image: 'https://via.placeholder.com/150/FFFFFF/000000?text=R2-D2' },
      { id: 4, name: 'Darth Vader', role: 'Sith Lord', image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Darth+Vader' },
      { id: 5, name: 'Leia Organa', role: 'Princess', image: 'https://via.placeholder.com/150/FF69B4/000000?text=Leia+Organa' },
      { id: 6, name: 'Han Solo', role: 'Smuggler', image: 'https://via.placeholder.com/150/8B4513/FFFFFF?text=Han+Solo' },
      { id: 7, name: 'Yoda', role: 'Jedi Master', image: 'https://via.placeholder.com/150/00FF00/000000?text=Yoda' },
      { id: 8, name: 'Obi-Wan Kenobi', role: 'Jedi Master', image: 'https://via.placeholder.com/150/1E90FF/FFFFFF?text=Obi-Wan+Kenobi' },
      { id: 9, name: 'Padmé Amidala', role: 'Queen', image: 'https://via.placeholder.com/150/FFB6C1/000000?text=Padmé+Amidala' },
      { id: 10, name: 'Qui-Gon Jinn', role: 'Jedi Master', image: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=Qui-Gon+Jinn' },
      { id: 11, name: 'Mace Windu', role: 'Jedi Master', image: 'https://via.placeholder.com/150/800080/FFFFFF?text=Mace+Windu' },
      { id: 12, name: 'Count Dooku', role: 'Sith Lord', image: 'https://via.placeholder.com/150/800000/FFFFFF?text=Count+Dooku' },
      { id: 13, name: 'Anakin Skywalker', role: 'Jedi Knight', image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Anakin+Skywalker' },
      { id: 14, name: 'Rey', role: 'Jedi', image: 'https://via.placeholder.com/150/FFFF00/000000?text=Rey' },
      { id: 15, name: 'Kylo Ren', role: 'Sith', image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Kylo+Ren' },
      { id: 16, name: 'Finn', role: 'Stormtrooper', image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Finn' },
      { id: 17, name: 'Poe Dameron', role: 'Pilot', image: 'https://via.placeholder.com/150/FFA500/000000?text=Poe+Dameron' },
      { id: 18, name: 'BB-8', role: 'Droid', image: 'https://via.placeholder.com/150/FFFFFF/000000?text=BB-8' },
      { id: 19, name: 'Jyn Erso', role: 'Rebel', image: 'https://via.placeholder.com/150/696969/FFFFFF?text=Jyn+Erso' },
      { id: 20, name: 'Cassian Andor', role: 'Rebel', image: 'https://via.placeholder.com/150/808080/FFFFFF?text=Cassian+Andor' },
      { id: 21, name: 'K-2SO', role: 'Droid', image: 'https://via.placeholder.com/150/A9A9A9/000000?text=K-2SO' },
      { id: 22, name: 'Lando Calrissian', role: 'Gambler', image: 'https://via.placeholder.com/150/FFFFE0/000000?text=Lando+Calrissian' },
      { id: 23, name: 'Boba Fett', role: 'Bounty Hunter', image: 'https://via.placeholder.com/150/006400/FFFFFF?text=Boba+Fett' },
      { id: 24, name: 'Jabba the Hutt', role: 'Crime Lord', image: 'https://via.placeholder.com/150/8B0000/FFFFFF?text=Jabba+the+Hutt' },
      { id: 25, name: 'Greedo', role: 'Bounty Hunter', image: 'https://via.placeholder.com/150/32CD32/000000?text=Greedo' },
      { id: 26, name: 'Grand Moff Tarkin', role: 'Imperial', image: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Grand+Moff+Tarkin' },
      { id: 27, name: 'Wedge Antilles', role: 'Pilot', image: 'https://via.placeholder.com/150/5F9EA0/FFFFFF?text=Wedge+Antilles' },
      { id: 28, name: 'Admiral Ackbar', role: 'Admiral', image: 'https://via.placeholder.com/150/FFD700/000000?text=Admiral+Ackbar' },
      { id: 29, name: 'Ahsoka Tano', role: 'Jedi', image: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=Ahsoka+Tano' },
      { id: 30, name: 'Hera Syndulla', role: 'Pilot', image: 'https://via.placeholder.com/150/ADFF2F/000000?text=Hera+Syndulla' },
    ];
  };


// src/api/mockApi.ts
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
  const response = await fetch(url);
  const data = await response.json();
  return data;
};