// src/components/PeopleCard.tsx
import React from 'react';
import { StarWarsItem } from '../store/reducers/starWarsReducer';


interface PeopleCardProps extends StarWarsItem {
  onClick: (url: string) => void;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ url, name, gender, birth_year, height, onClick }) => {
  return (
    <div
      onClick={() => onClick(url)}
      className="bg-gray-800 p-4 rounded-lg text-center transition-transform transform hover:scale-105 cursor-pointer"
    >
      <h2 className="text-xl text-white mb-2">{name}</h2>
      {gender && <p className="text-gray-400">Gender: {gender}</p>}
      {birth_year && <p className="text-gray-400">Birth Year: {birth_year}</p>}
      {height && <p className="text-gray-400">Height: {height} cm</p>}
    </div>
  );
};

export default PeopleCard;
