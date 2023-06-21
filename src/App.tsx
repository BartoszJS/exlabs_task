import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeerList from "./components/BeerList/BeerList";
import BeerDetails from "./components/BeerDetails/BeerDetails";

const App: React.FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route index path='/beer-list' element={<BeerList />} />
          <Route path='/details/:beerId' element={<BeerDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
