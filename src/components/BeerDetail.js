import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const BeerDetail = ({ match }) => {
  const [beerItem, setBeerItemState] = useState({});
  console.log(match);
  useEffect(() => {
    const fetchOneBeer = async () => {
      const beerItem = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${match.params.beerId}`
      );
      setBeerItemState(beerItem.data);
    };
    fetchOneBeer();
  }, [match.params.beerId]);

  return (
    <div className="beer-detail">
      <img
        className="beer-detail-image"
        src={beerItem.image_url}
        alt={beerItem.name}
      ></img>
      <div className="beer-detail-text">
        <h3>{beerItem.name}</h3>
        <h4 className="beer-detail-tagline">Tagline: {beerItem.tagline}</h4>
        <h5>First brewed: {beerItem.first_brewed}</h5>
        <h5>Attenuation level: {beerItem.attenuation_level}</h5>
        <p>Description: {beerItem.description}</p>
        <h5>Contributed by: {beerItem.contributed_by}</h5>
      </div>
    </div>
  );
};

export default BeerDetail;
