// src/components/StarshipsCard.tsx
import React from 'react';
import { StarWarsItem } from '../store/reducers/starWarsReducer';


interface StarshipsCardProps extends StarWarsItem {
  onClick: (url: string) => void;
}

const StarshipsCard: React.FC<StarshipsCardProps> = ({ url, name, model, manufacturer, hyperdrive_rating, onClick }) => {
  return (
    <div
      onClick={() => onClick(url)}
      className="bg-gray-800 p-4 rounded-lg text-center transition-transform transform hover:scale-105 cursor-pointer"
    >
      <h2 className="text-xl text-white mb-2">{name}</h2>
      {model && <p className="text-gray-400">Model: {model}</p>}
      {manufacturer && <p className="text-gray-400">Manufacturer: {manufacturer}</p>}
      {hyperdrive_rating && <p className="text-gray-400">Hyperdrive Rating: {hyperdrive_rating}</p>}
    </div>
  );
};

export default StarshipsCard;
