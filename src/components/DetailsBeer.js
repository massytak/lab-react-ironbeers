import React from 'react';
import axios from 'axios';
import Header from './Header';

export default class DetailsBeer extends React.Component {
  state = {
    beer: false,
  };
  componentDidMount() {
    if (this.props.random) {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => {
          this.setState({ beer: response.data });
        });
    } else {
      axios
        .get(
          `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
        )
        .then((response) => {
          this.setState({ beer: response.data });
        });
    }
  }
  render() {
    return (
      (!this.state.beer && <h1>Loading...</h1>) || (
        <div>
          <Header />
          <div className="single-beer">
            <img src={this.state.beer.image_url} alt="beer" />
            <div className="title-single">
              <p>
                {this.state.beer.name}{' '}
                <span className="level-single">
                  {this.state.beer.attenuation_level}
                </span>
              </p>
            </div>
            <div className="subtitle-single">
              <p>
                <span className="tagline-single">
                  {this.state.beer.tagline}
                </span>{' '}
                <span className="date-single">
                  {this.state.beer.first_brewed}
                </span>
              </p>
            </div>
            <p>{this.state.beer.description}</p>
            <p className="contributor-single">
              {this.state.beer.contributed_by}
            </p>
          </div>
        </div>
      )
    );
  }
}
