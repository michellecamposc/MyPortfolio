import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DataLover } from "../pages/DataLover";
import { GoWildNature } from "../pages/GoWildNature";
import { Oranga } from "../pages/Oranga";
import { DejaBurg } from "../pages/DejaBurg";
import { Lezza } from "../pages/Leeza";
import { PetSitter } from "../pages/PetSitter";
import { About } from "../pages/About";

//  Routes of the website
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dataLover" element={<DataLover />} />
        <Route path="/goWildNature" element={<GoWildNature />} />
        <Route path="/oranga" element={<Oranga />} />
        <Route path="/dejaBurg" element={<DejaBurg />} />
        <Route path="/lezza" element={<Lezza />} />
        <Route path="/petSitter" element={<PetSitter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};
