import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import './App.css';

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x01df5ae7Ee67a583116De8ff53f6954871784FD4&order_direction=asc');
      setPunkListData(result.data.assets);
    };
    fetchData();
  }, []);

  return (
    <div className='app'>
    <Header />
    <div className='body'>
    {punkListData.map(punk => (
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        ))}
    </div>
    </div>
  );
}

export default App;
