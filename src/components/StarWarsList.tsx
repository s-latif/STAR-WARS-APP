import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStarWarsData } from '../store/actions/starWarsActions';
import { RootState, AppDispatch } from '../store';

const StarWarsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.starWars.data);

  useEffect(() => {
    dispatch(getStarWarsData());
  }, [dispatch]);

  return (
    <div className="p-4">
      {data.map((item) => (
        <div key={item.id} className="bg-gray-200 p-2 mb-2 rounded">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default StarWarsList;