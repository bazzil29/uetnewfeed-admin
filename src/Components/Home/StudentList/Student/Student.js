import React, { Component } from 'react';
import { CardHeader} from 'reactstrap';
import {Col, Row} from "reactstrap";
import './Student.css';

export default class Student extends React.Component{
    render(){
        return(
            <CardHeader>
                <Row>
                    <Col lg={'1'} md ={'1'}>1</Col>
                    <Col lg={'4'} md={'4'}>Ngo Minh Phuong</Col>
                    <Col lg={'2'} md={'2'}>16021629</Col>
                    <Col lg={'1'} md={'1'}>3.0</Col>
                    <Col lg={'2'} md={'2'}>90</Col>
                    <Col lg={'2'} md={'2'}>
                        <span className={'event-edit-btn'} onClick={this.props.toggle}>Chi tiết</span>
                    </Col>
                </Row>
            </CardHeader>

        )
/*
        return (
            <div className="card">
                <div className="card-body">NGO MINH PHUONG

                </div>
            </div>
        )
*/
    }
}