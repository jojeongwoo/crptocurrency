import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// components 
import Coin from './Coin';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => { 
      setCoins(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(coins)


  return (
    <div>
      <div className="search">
        <h1 className="searchTitle">Search a currency</h1>
        <form className="searchBottom">
          <input type="text" placeholder="Search..." className="searchBar" onChange={handleChange} />
        </form>
      </div>
      
      {filteredCoins.map(coins => {
        return (
          <Coin
              key={coins.id}
              img={coins.image}
              name={coins.name}
              symbol={coins.symbol}
              price={coins.current_price}
              markerCap={coins.market_cap}
              per={coins.price_change_percentage_24h}
              volume={coins.total_volume}
          />
        )})
      }
    </div>
  );
}

export default App;
