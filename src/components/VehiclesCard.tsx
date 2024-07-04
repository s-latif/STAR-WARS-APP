// src/components/VehiclesCard.tsx
import React from 'react';
import { StarWarsItem } from '../store/reducers/starWarsReducer';


interface VehiclesCardProps extends StarWarsItem {
  onClick: (url: string) => void;
}

const VehiclesCard: React.FC<VehiclesCardProps> = ({ url, name, model, manufacturer, cost_in_credits, onClick }) => {
  return (
    <div
      onClick={() => onClick(url)}
      className="bg-gray-800 p-4 rounded-lg text-center transition-transform transform hover:scale-105 cursor-pointer"
    >
      <h2 className="text-xl text-white mb-2">{name}</h2>
      {model && <p className="text-gray-400">Model: {model}</p>}
      {manufacturer && <p className="text-gray-400">Manufacturer: {manufacturer}</p>}
      {cost_in_credits && <p className="text-gray-400">Cost: {cost_in_credits} credits</p>}
    </div>
  );
};

export default VehiclesCard;
