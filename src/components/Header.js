import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {

    render() {
        return (
            <nav>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/list">
                    <button>List Beers</button>
                </Link>
                <Link to="/random">
                    <button>Random Beers</button>
                </Link>
                <Link to="/new">
                    <button>New Beers</button>
                </Link>
            </nav>
        );
    }
}