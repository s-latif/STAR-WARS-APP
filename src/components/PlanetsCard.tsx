// src/components/PlanetsCard.tsx
import React from 'react';
import { StarWarsItem } from '../store/reducers/starWarsReducer';


interface PlanetsCardProps extends StarWarsItem {
  onClick: (url: string) => void;
}

const PlanetsCard: React.FC<PlanetsCardProps> = ({ url, name, climate, terrain, population, onClick }) => {
  return (
    <div
      onClick={() => onClick(url)}
      className="bg-gray-800 p-4 rounded-lg text-center transition-transform transform hover:scale-105 cursor-pointer"
    >
      <h2 className="text-xl text-white mb-2">{name}</h2>
      {climate && <p className="text-gray-400">Climate: {climate}</p>}
      {terrain && <p className="text-gray-400">Terrain: {terrain}</p>}
      {population && <p className="text-gray-400">Population: {population}</p>}
    </div>
  );
};

export default PlanetsCard;
