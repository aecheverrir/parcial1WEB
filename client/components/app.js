import React from 'react';

import Banner from './Banner';
import DataBar from './DataBar';
import Results from './Results';
import SideBar from './SideBar';

import { Container, Row, Col } from 'reactstrap';
import { getCarros } from "../actions/actions";


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "testName",
            carros: [],
            search: "",
            
        };
        this.getCarros = getCarros.bind(this);
        this.searchInputCallback = this.searchInputCallback.bind(this);
    }

    componentDidMount() {
      this.getCarros(this);
    }

    searchInputCallback(dataFromBanner){
      this.setState({search: dataFromBanner.target.value});
    }

    render () {

        /*style*/
        var styles = { 
            "margin": "0",
            "padding": "0",
            "border": "0",
            "outline": "0",
            "font-family": "sans-serif",
            "font-weight": "normal",
            "font-size": "15px",
            "vertical-align": "baseline",
            "background": "transparent",
            "box-sizing": "border-box",
            "line-height": "30px",
            "color": "#838C95"
        };

        return (
          <div style={styles}>
            <Container>
              <Banner callbackApp={this.searchInputCallback}/>
              <h1>{this.state.search}</h1>
            </Container>
          </div>
        );
    }
}
