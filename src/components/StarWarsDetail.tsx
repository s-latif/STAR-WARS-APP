import React from 'react';

const StarWarsDetail: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.role}</p>
    </div>
  );
};

export default StarWarsDetail;