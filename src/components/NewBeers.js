import React from 'react';
import Header from './Header';
import axios from 'axios';

export default class NewBeers extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
      contributed_by: '',
  };
  handleFormSubmit = (e) => {
      e.preventDefault();
      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state).then((response) => {
      this.setState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
      });
          console.log(response);
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <h1>Create your beer</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            rows="5"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />
          <label>First brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Brewers tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Attenuation level</label>
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={(e) => this.handleChange(e)}
                />
                <label>Contributed by:</label>
          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={(e) => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
