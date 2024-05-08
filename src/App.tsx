import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '@pages/Landing/Landing';
import Login from '@pages/Login/Login';
import SignUp from '@pages/SignUp/SignUp';
import SearchVs from '@pages/SearchVs/SearchVs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/search-vs'} element={<SearchVs />} />
      </Routes>
    </div>
  );
}

export default App;
