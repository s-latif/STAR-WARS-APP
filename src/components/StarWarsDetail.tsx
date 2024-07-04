// src/components/StarWarsDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchData } from '../api/mockApi';
import { HomeIcon, ArrowLeftIcon } from '@radix-ui/react-icons';
import PeopleCard from './PeopleCard';
import PlanetsCard from './PlanetsCard';
import FilmsCard from './FilmsCard';
import SpeciesCard from './SpeciesCard';
import VehiclesCard from './VehiclesCard';
import StarshipsCard from './StarshipsCard';
import { StarWarsItem } from '../store/reducers/starWarsReducer';


interface DetailProps {
  name?: string;
  title?: string;
  [key: string]: any; // Other dynamic properties
}

const StarWarsDetail: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [detail, setDetail] = useState<DetailProps | null>(null);
  const [relatedData, setRelatedData] = useState<{ [key: string]: StarWarsItem[] }>({});
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
      else if (data.people) setActiveTab('people');
      else if (data.planets) setActiveTab('planets');

      // Fetch related data
      const related: { [key: string]: StarWarsItem[] } = {};
      for (const key of ['films', 'species', 'vehicles', 'starships', 'people', 'planets']) {
        if (data[key] && data[key].length > 0) {
          const promises = data[key].map((url: string) => fetchData(url));
          related[key] = await Promise.all(promises);
        }
      }
      setRelatedData(related);
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
    navigate(-1); // Navigate to the previous page
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home (listing) page
  };

  if (!detail) return <div>Loading...</div>;

  const tabs = ['films', 'species', 'vehicles', 'starships', 'people', 'planets'].filter(tab => detail[tab] && detail[tab].length > 0);

  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
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
      <h1 className="text-4xl text-white mb-6">{detail.name || detail.title}</h1>
      <div className="mb-4">
        {Object.entries(detail).map(([key, value]) => {
          if (
            ['films', 'species', 'vehicles', 'starships', 'people', 'planets'].includes(key) ||
            typeof value === 'object' ||
            (typeof value === 'string' && value.startsWith('https://'))
          ) {
            return null;
          }

          let displayValue = value;
          if (!isNaN(Date.parse(value))) {
            const date = new Date(value);
            displayValue = date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            });
          }

          return (
            <p key={key} className="text-white">
              <strong>{key.replace('_', ' ')}:</strong> {displayValue}
            </p>
          );
        })}
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
      {activeTab && relatedData[activeTab] && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activeTab === 'films' && relatedData[activeTab].map((item: StarWarsItem) => (
            <FilmsCard
              key={item.url}
              url={item.url}
              title={item.title || ''}
              director={item.director || ''}
              release_date={item.release_date || ''}
              onClick={handleItemClick}
            />
          ))}
          {activeTab === 'species' && relatedData[activeTab].map((item: StarWarsItem) => (
            <SpeciesCard
              key={item.url}
              url={item.url}
              name={item.name}
              classification={item.classification || ''}
              designation={item.designation || ''}
              average_height={item.average_height || ''}
              onClick={handleItemClick}
            />
          ))}
          {activeTab === 'vehicles' && relatedData[activeTab].map((item: StarWarsItem) => (
            <VehiclesCard
              key={item.url}
              url={item.url}
              name={item.name}
              model={item.model || ''}
              manufacturer={item.manufacturer || ''}
              cost_in_credits={item.cost_in_credits || ''}
              onClick={handleItemClick}
            />
          ))}
          {activeTab === 'starships' && relatedData[activeTab].map((item: StarWarsItem) => (
            <StarshipsCard
              key={item.url}
              url={item.url}
              name={item.name}
              model={item.model || ''}
              manufacturer={item.manufacturer || ''}
              hyperdrive_rating={item.hyperdrive_rating || ''}
              onClick={handleItemClick}
            />
          ))}
          {activeTab === 'people' && relatedData[activeTab].map((item: StarWarsItem) => (
            <PeopleCard
              key={item.url}
              url={item.url}
              name={item.name}
              gender={item.gender}
              birth_year={item.birth_year}
              height={item.height}
              onClick={handleItemClick}
            />
          ))}
          {activeTab === 'planets' && relatedData[activeTab].map((item: StarWarsItem) => (
            <PlanetsCard
              key={item.url}
              url={item.url}
              name={item.name}
              climate={item.climate}
              terrain={item.terrain}
              population={item.population}
              onClick={handleItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StarWarsDetail;