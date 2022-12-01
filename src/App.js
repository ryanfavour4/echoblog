import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Create from "./Pages/Create";
import Navbar from "./Reusables/Navbar";

function App() {
  const [data, setData] = useState(null);

  async function getData(url) {
    axios
      .get(url)
      .then((res)=>  setData(res.data))
      .catch((err) => console.log(err, "Error"));
  }

  useEffect(() => {
    getData("http://localhost:3000/blogs");
  }, []);

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
