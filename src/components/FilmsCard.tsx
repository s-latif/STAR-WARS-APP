// src/components/FilmsCard.tsx
import React from 'react';
import { StarWarsItem } from '../store/reducers/starWarsReducer';


interface FilmsCardProps extends StarWarsItem {
  onClick: (url: string) => void;
}

const FilmsCard: React.FC<FilmsCardProps> = ({ url, title, director, release_date, onClick }) => {
  return (
    <div
      onClick={() => onClick(url)}
      className="bg-gray-800 p-4 rounded-lg text-center transition-transform transform hover:scale-105 cursor-pointer"
    >
      <h2 className="text-xl text-white mb-2">{title}</h2>
      {director && <p className="text-gray-400">Director: {director}</p>}
      {release_date && <p className="text-gray-400">Release Date: {release_date}</p>}
    </div>
  );
};

export default FilmsCard;
