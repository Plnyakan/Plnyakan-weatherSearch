import React from "react";

const api = {
  key: "37f0ae1dd4a3fedceba1863bcfe34b07",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
     "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}` 

  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type='text'
            className="search-bar"
            placeholder="search..."  
            />
        </div>
        <div className="location-box">
           <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            
          </div>
          <div className="weather"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
