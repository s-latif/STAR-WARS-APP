import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStarWarsData } from '../store/actions/starWarsActions';
import { RootState, AppDispatch } from '../store';
import { fetchTabs } from '../api/mockApi';

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
        {data.slice(0, visibleCount).map((item) => (
          <div
            key={item.url}
            className="bg-gray-800 p-4 rounded-lg text-center transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl text-white">{item.name}</h2>
            <p className="text-gray-400">{item.url}</p>
          </div>
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