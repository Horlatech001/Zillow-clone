import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {

  const [houses, setHouses] = useState([]);

  const getListing = async () => {
    const url = 'https://realtor.p.rapidapi.com/properties/list-sold?state_code=NY&city=New%20York%20City&offset=0&limit=200&sort=relevance&radius=10';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '53c920c0c4msh8388b3be032db9ap1c4826jsnadc900ef66dc',
        'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      // Access the data array within the fetched object
      const data = result.listings; // Assuming the array is named "data"

      console.log(data);
      setHouses(data);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getListing();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/buy" element={<Buy getListing={getListing} houses={houses} />} />
        <Route path="/rent" element={<Rent getListing={getListing} houses={houses} />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </>
  );
}

export default App;
