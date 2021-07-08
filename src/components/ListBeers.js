import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ListBeers extends React.Component {
  state = {
    beers: false,
  };
  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
    });
  }
  render() {
    return (
      (!this.state.beers && <h1>Loading...</h1>) ||
      this.state.beers.map((beer) => {
        return (
          <Link to={`/beers/${beer._id}`}>
            <div key={beer._id} className="item-beer">
              <img src={beer.image_url} alt="beer" />
              <div>
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>Contibuted by: {beer.contributed_by}</p>
              </div>
            </div>
          </Link>
        );
      })
    );
  }
}
