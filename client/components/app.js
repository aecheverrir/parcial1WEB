import React from 'react';

import Banner from './Banner';
import DataBar from './DataBar';
import Results from './Results';
import SideBar from './SideBar';

import { Container, Row, Col } from 'reactstrap';
import { getInstagramData } from "../actions/actions";


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            winner: "",
            search: "",
            
        };
        this.getInstagramData = getInstagramData.bind(this);
        this.searchInputCallback = this.searchInputCallback.bind(this);
    }

    searchInputCallback(dataFromBanner){
        this.setState({search: dataFromBanner.target.value});
        if(dataFromBanner.target.value != ""){
        this.getInstagramData(this, dataFromBanner.target.value);
        }
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
              <h1> The winner is: {this.state.winner}</h1>
            </Container>
          </div>
        );
    }
}
