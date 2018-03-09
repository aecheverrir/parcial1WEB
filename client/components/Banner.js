import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import App from './App';

export default class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
        testState: "abcd"
        }
    }


  render () {
    
    /*style*/
  	var styles = { 

        "backgroundColor": "#db1d0f",
        "borderColor": "#db1d0f",
        "marginColor": "#db1d0f",
        "padding-bottom": "20px",
        "padding-top": "20px"
  	};
    var styleH1 = {
        "font-size": "50px",
        "color":"white"
    };

    return (
    	<div style={styles}>
            <Row>
                <Col sm="3">
                    <Container>
            		  <h3 style={styleH1}>InstaFight</h3>
                    </Container>
                </Col>
                <Col sm="9">
                    <Container>
                        <br/>
                        <Input type="search" name="search" id="buscarCarro" placeholder="type here the hashtag" onChange={this.props.callbackApp}/>
                    </Container>
                </Col>
            </Row>
    	</div>
    );
  }

}
