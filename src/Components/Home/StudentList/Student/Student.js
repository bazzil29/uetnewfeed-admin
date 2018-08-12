import React, { Component } from 'react';
import { Col, Row , Button,CardHeader } from 'reactstrap';
import './Student.css';

export default class Student extends React.Component {
    render() {
        return (
            <CardHeader>
                <Row>
                    <Col lg={'1'} md={'1'}>{this.props.index}</Col>
                    <Col lg={'4'} md={'4'}>{this.props.data.name}</Col>
                    <Col lg={'2'} md={'2'}>{this.props.data.id}</Col>
                    <Col lg={'1'} md={'1'}>{this.props.data.position}</Col>
                    <Col lg={'2'} md={'2'}>{this.props.data.point}</Col>
                    <Col lg={'2'} md={'2'} onClick = {this.props.toggle}>
                        <Button className="btn btn-info">Ch?nh s?a</Button>
                    </Col>
                </Row>
            </CardHeader>
        )
    }
}