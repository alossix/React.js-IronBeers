import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Beers = () => {
  const [beerState, setBeerState] = useState([]);
  const newBeerState = [...beerState];

  useEffect(() => {
    const fetchBeers = async () => {
      const beersData = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeerState(beersData.data);
    };
    fetchBeers();
  }, []);

  return (
    <div>
      {newBeerState.map((beer) => {
        return (
          <div key={beer._id} className="beers">
            <Link to={`/beers/${beer._id}`} style={{ textDecoration: 'none' }}>
              <div className="beers-card">
                <img src={beer.image_url} alt={beer.name}></img>
                <div className="beers-card-right">
                  <h3 className="beers-name">{beer.name}</h3>
                  <h4 className="beers-tagline">{beer.tagline}</h4>
                  <h5 className="beers-contributed-by">
                    {beer.contributed_by}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
