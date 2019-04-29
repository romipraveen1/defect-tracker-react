import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import Adddefectform from '../Adddefectform';

export default class Fetchdefetcdrop extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],
        };
    }


componentDidMount() {
    let initialPlanets = [];
    fetch('http://localhost:8080/library/finddeveloper')
        .then(response => {
            return response.json();
        }).then(data => {
        initialPlanets = data.results.map((planet) => {
            return planet
        });
        console.log(initialPlanets);
        this.setState({
            planets: initialPlanets,
        });
    });
}

render() {
    return (
                <Adddefectform state={this.state}/>
    );
}
}

