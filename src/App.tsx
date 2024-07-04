import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarWarsList from './components/StarWarsList';
import StarWarsDetail from './components/StarWarsDetail';

function App() {
  return (
    <Router>
      <div className="App bg-black min-h-screen">
        <header className="p-4 flex justify-center mt-6">
          <img src="/star-wars.png" alt="Star Wars Logo" className="w-1/3 mb-4" />
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<StarWarsList />} />
            <Route path="/detail/:type/:id" element={<StarWarsDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;