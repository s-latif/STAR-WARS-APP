// src/components/StarWarsList.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getStarWarsData } from '../store/actions/starWarsActions';
import { RootState, AppDispatch } from '../store';
import { fetchTabs } from '../api/mockApi';

import PlanetsCard from './PlanetsCard';
import FilmsCard from './FilmsCard';
import SpeciesCard from './SpeciesCard';
import VehiclesCard from './VehiclesCard';
import StarshipsCard from './StarshipsCard';
import { StarWarsItem } from '../store/reducers/starWarsReducer';
import PeopleCard from './PeopleCard';


interface Tabs {
  people: string;
  planets: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
}

const StarWarsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, next } = useSelector((state: RootState) => state.starWars);
  const [tabs, setTabs] = useState<Tabs>({
    people: '',
    planets: '',
    films: '',
    species: '',
    vehicles: '',
    starships: '',
  });
  const [activeTab, setActiveTab] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState(8);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTabs = async () => {
      const tabsData = await fetchTabs();
      setTabs(tabsData);
      const firstTab = Object.keys(tabsData)[0] as keyof Tabs;
      setActiveTab(firstTab);
      dispatch(getStarWarsData(tabsData[firstTab]));
    };
    loadTabs();
  }, [dispatch]);

  const handleTabClick = (tab: keyof Tabs) => {
    setActiveTab(tab);
    setVisibleCount(8); // Reset visible count when tab changes
    dispatch(getStarWarsData(tabs[tab]));
  };

  const showMore = () => {
    if (next) {
      dispatch(getStarWarsData(next));
      setVisibleCount((prevCount) => prevCount + 8);
    }
  };

  const handleItemClick = (url: string) => {
    const parts = url.split('/');
    const newType = parts[parts.length - 3];
    const newId = parts[parts.length - 2];
    navigate(`/detail/${newType}/${newId}`);
  };

  return (
    <div className="p-4">
      <header className="flex justify-center space-x-4 mb-6">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab as keyof Tabs)}
            className={`px-4 py-2 text-white rounded transition-transform transform hover:scale-105 ${
              activeTab === tab ? 'bg-blue-500' : 'bg-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </header>
      <h1 className="text-4xl text-white mb-6">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activeTab === 'people' && data.slice(0, visibleCount).map((item: StarWarsItem) => (
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
        {activeTab === 'planets' && data.slice(0, visibleCount).map((item: StarWarsItem) => (
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
        {activeTab === 'films' && data.slice(0, visibleCount).map((item: StarWarsItem) => (
          <FilmsCard
            key={item.url}
            url={item.url}
            title={item.title}
            director={item.director}
            release_date={item.release_date}
            onClick={handleItemClick}
          />
        ))}
        {activeTab === 'species' && data.slice(0, visibleCount).map((item: StarWarsItem) => (
          <SpeciesCard
            key={item.url}
            url={item.url}
            name={item.name}
            classification={item.classification}
            designation={item.designation}
            average_height={item.average_height}
            onClick={handleItemClick}
          />
        ))}
        {activeTab === 'vehicles' && data.slice(0, visibleCount).map((item: StarWarsItem) => (
          <VehiclesCard
            key={item.url}
            url={item.url}
            name={item.name}
            model={item.model}
            manufacturer={item.manufacturer}
            cost_in_credits={item.cost_in_credits}
            onClick={handleItemClick}
          />
        ))}
        {activeTab === 'starships' && data.slice(0, visibleCount).map((item: StarWarsItem) => (
          <StarshipsCard
            key={item.url}
            url={item.url}
            name={item.name}
            model={item.model}
            manufacturer={item.manufacturer}
            hyperdrive_rating={item.hyperdrive_rating}
            onClick={handleItemClick}
          />
        ))}
      </div>
      {next && visibleCount < data.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMore}
            className="px-4 py-2 bg-blue-500 text-white rounded transition-transform transform hover:scale-105"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default StarWarsList;