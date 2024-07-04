import React from 'react';
import StarWarsList from './components/StarWarsList'; // Adjust the path if necessary
import './App.css';

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <header className="p-4 flex justify-center">
        <img src="/star-wars.png" alt="Star Wars Logo" className="w-1/3 mb-4" />
      </header>
      <main className="p-4">
        <StarWarsList />
      </main>
    </div>
  );
}

export default App;