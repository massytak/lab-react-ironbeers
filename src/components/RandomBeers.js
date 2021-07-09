import React from "react";
import DetailsBeer from "./DetailsBeer";

export default class RandomBeers extends React.Component {

    render() {
        return (<DetailsBeer random={true}/>);
    }
}