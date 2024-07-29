import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Cards from "./components/Cards";
import AddMovies from "./components/AddMovies";
import Details from './components/Details'

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMovies />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
