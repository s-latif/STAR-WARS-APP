import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchData } from '../api/mockApi';
import { HomeIcon, ArrowLeftIcon } from '@radix-ui/react-icons';

interface DetailProps {
  name: string;
  [key: string]: any; 
}

const StarWarsDetail: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [detail, setDetail] = useState<DetailProps | null>(null);
  const [activeTab, setActiveTab] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadDetail = async () => {
      const data = await fetchData(`https://swapi.py4e.com/api/${type}/${id}/`);
      setDetail(data);
      if (data.films) setActiveTab('films');
      else if (data.species) setActiveTab('species');
      else if (data.vehicles) setActiveTab('vehicles');
      else if (data.starships) setActiveTab('starships');
    };
    loadDetail();
  }, [type, id]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleItemClick = (url: string) => {
    const parts = url.split('/');
    const newType = parts[parts.length - 3];
    const newId = parts[parts.length - 2];
    navigate(`/detail/${newType}/${newId}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  if (!detail) return <div>Loading...</div>;

  const tabs = ['films', 'species', 'vehicles', 'starships'].filter(tab => detail[tab] && detail[tab].length > 0);

  return (
    <div className="p-4">
      <header className=" w-full bg-black p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={handleBackClick}
            className="px-4 py-2 bg-blue-500 text-white rounded transition-transform transform hover:scale-105 flex items-center space-x-2"
          >
            <ArrowLeftIcon />
            <span>Back</span>
          </button>
          <button
            onClick={handleHomeClick}
            className="px-4 py-2 bg-green-500 text-white rounded transition-transform transform hover:scale-105 flex items-center space-x-2"
          >
            <HomeIcon />
            <span>Home</span>
          </button>
        </div>
      </header>
      <div className="mt-20">
        <h1 className="text-4xl text-white mb-6">{detail.name || detail.title}</h1>
        <div className="mb-4">
          {Object.entries(detail).map(([key, value]) => (
            !['films', 'species', 'vehicles', 'starships', 'people'].includes(key) && (
              <p key={key} className="text-white"><strong>{key.replace('_', ' ')}:</strong> {value}</p>
            )
          ))}
        </div>
        <header className="flex justify-center space-x-4 mb-6">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 text-white rounded transition-transform transform hover:scale-105 ${
                activeTab === tab ? 'bg-blue-500' : 'bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </header>
        {activeTab && detail[activeTab] && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {detail[activeTab].map((url: string) => (
              <div
                key={url}
                onClick={() => handleItemClick(url)}
                className="bg-gray-800 p-4 rounded-lg text-center transition-transform transform hover:scale-105 cursor-pointer"
              >
                <p className="text-white">{url}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StarWarsDetail;