import React from 'react';
import axios from 'axios';

export default class DetailsBeer extends React.Component {
  state = {
    beer: false,
  };
  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({ beer: response.data });
      });
  }
  render() {
    return (
      (!this.state.beer && <h1>Loading...</h1>) || (
        <div className="single-beer">
          <img src={this.state.beer.image_url} alt="beer" />
        </div>
      )
    );
  }
}
