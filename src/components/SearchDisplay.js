import React from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'



function SearchDisplay(props) {

    return (
        <div id="searchDisplayContainer">
            <Container id="SearchContainer">
                <input type="search" id="searchBar" className="form-control" onChange={(e) => props.handleInput(e)} placeholder="Enter Your IP Address Here" />
                <Button id="searchBtn" type="button" className="searchBarBtn btn" variant="dark" onClick={() => props.handleClick()} >
                    <FontAwesomeIcon icon={faAngleRight} />
                </Button>
            </Container>
            <Container id="diplayContainer">
                <Row>
                    <Col xs={12} md={3} className="text-box box1">
                        <span className="title">IP ADDRESS</span>
                        <p className="result">{props.displayInfo.ipAddress}</p>
                    </Col>
                    <Col xs={12} md={3} className="text-box box2">
                        <span className="title">LOCATION</span>
                        <p className="result">{props.displayInfo.city + ", "}{props.displayInfo.region}{"  " + props.displayInfo.postalCode}</p>
                    </Col>
                    < Col xs={12} md={3} className="text-box box3">
                        <span className="title">TIMEZONE</span>
                        <p className="result">UTC {props.displayInfo.timeZone}</p>
                    </Col>
                    < Col xs={12} md={3} className="text-box box4">
                        <span className="title">ISP</span>
                        <p className="result">{props.displayInfo.isp}</p>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}


export default SearchDisplay;