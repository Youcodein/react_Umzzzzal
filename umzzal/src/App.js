import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import {
  MainConts,
  SearchConts,
  SidebarCont,
  HeaderTag,
} from './components'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<HeaderTag />}></Route>
        <Route path="/" element={<MainConts />}></Route>
        <Route element={<SidebarCont />}></Route>
        <Route element={<SearchConts />}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;