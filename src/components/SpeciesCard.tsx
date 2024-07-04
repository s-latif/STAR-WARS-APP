// src/components/SpeciesCard.tsx
import React from 'react';
import { StarWarsItem } from '../store/reducers/starWarsReducer';


interface SpeciesCardProps extends StarWarsItem {
  onClick: (url: string) => void;
}

const SpeciesCard: React.FC<SpeciesCardProps> = ({ url, name, classification, designation, average_height, onClick }) => {
  return (
    <div
      onClick={() => onClick(url)}
      className="bg-gray-800 p-4 rounded-lg text-center transition-transform transform hover:scale-105 cursor-pointer"
    >
      <h2 className="text-xl text-white mb-2">{name}</h2>
      {classification && <p className="text-gray-400">Classification: {classification}</p>}
      {designation && <p className="text-gray-400">Designation: {designation}</p>}
      {average_height && <p className="text-gray-400">Average Height: {average_height} cm</p>}
    </div>
  );
};

export default SpeciesCard;
