import React from "react";
import axios from 'axios';

export default class ListBeers extends React.Component {

    state = {
        beers:[]
    }
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
        })    }
    render() {
        return (<h1>List</h1>);
    }
}