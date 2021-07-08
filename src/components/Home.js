import React from "react";
import { Link } from 'react-router-dom';
import imgBeers from "../assets/beers.png";
import imgRandom from "../assets/random-beer.png";
import imgNew from "../assets/new-beer.png";
export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Link to="/list">
                    <h1>List Beers</h1>
                    <img src={imgBeers} alt="beers" />
                </Link>
                <Link to="/random">
                    <h1>Random Beers</h1>
                    <img src={imgRandom} alt="beers" />
                </Link>
                <Link to="/new">
                    <h1>New Beers</h1>
                    <img src={imgBeers} alt="beers" />
                </Link>
            </div>);
    }
}
