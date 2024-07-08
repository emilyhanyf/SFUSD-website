import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home/Home";
import { Part1 } from './components/Part1/Part1';
import { Part2 } from './components/Part2/Part2';
import { Part3 } from './components/Part3/Part3';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/part1' element={<Part1 />} />
        <Route path='/part2' element={<Part2 />} />
        <Route path='/part3' element={<Part3 />} />
      </Routes>
    </>
  );
};

export default App;
