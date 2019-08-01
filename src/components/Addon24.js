import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const scope = {Image, Container, Col, Row};

class Addon24 extends Component {
    render() {
         let rows = ["rounded", "roundedCircle", "thumbnail", "sss", "ddd"].map((imageType, idx) => {
                    return <Row>
                        <Col xs={6} md={4}>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG" />
                            {imageType}
                        </Col>
                    </Row>;
                });
                return (
                    <div>
                        <FiddleComponent code='<Container>
                               F. Reyyan Sarıkaya
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.jpg" roundedCircle />
                    </Col>
                    </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG" thumbnail />
                    </Col>
                </Row>
                </Container>' scope = {scope}>

                        </FiddleComponent>
                        {rows}



                    </div>
                );
    }
}

export default Addon24;