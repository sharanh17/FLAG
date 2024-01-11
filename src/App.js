import React, { useState, useEffect } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Countries Name
      </h1>
      <div style={containerStyle}>
        {countries.map((country) => (
          <div key={country.alpha3Code} style={cardStyle}>
            {/* Access the 'common' property of the 'name' object */}
            <img
              src={country.flags.png}
              alt={`${country.name.common} Flag`}
              style={imageStyle}
            />
            <h2>{country.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
