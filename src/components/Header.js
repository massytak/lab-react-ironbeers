import React from "react";
import { Link } from "react-router-dom";
import homeIco from "../assets/home.png"
export default class Header extends React.Component {

    render() {
        return (
            <nav>
                <Link to="/">
                    <img src={homeIco}/>
                </Link>
            </nav>
        );
    }
}