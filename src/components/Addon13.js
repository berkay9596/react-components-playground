import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import resim from "./19926_en_1.jpg";

const scope = {Image, Container, Col, Row, resim};

class Addon13 extends Component {
    render() {

        let rows = ["rounded", "roundedCircle", "thumbnail", "sss", "ddd"].map((imageType, idx) => {
            return <Row>
                <Col xs={6} md={4}>
                    <Image src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" />
                    {imageType}
                </Col>
            </Row>;
        });
        return (
            <div>
                <FiddleComponent code='<Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={resim} rounded />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" roundedCircle />
            </Col>
            </Row>
        <Row>
            <Col xs={6} md={4}>
                <Image src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" thumbnail />
            </Col>
        </Row>
        </Container>' scope = {scope}>

                </FiddleComponent>
                {rows}



            </div>
        );
    }
}

export default Addon13;