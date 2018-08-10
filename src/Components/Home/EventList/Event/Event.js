import React, { Component } from 'react';
import {Col, Row, Button} from "reactstrap";
import './Event.css';
import moment from "moment";
export default class Event extends React.Component {
    onClickEdit = () =>{
        this.props.toggle(this.props.data.id_eve);
    }
    render() {
        // console.log(this.props.data);
        const tmp = new Date(2018, 1, 9, 13, 0, 0);
        const day = moment(tmp)._d;
        return ( 
            <div className="card">
                <div className="card-header">
                    <i className="fas fa-calendar-alt"/> {this.props.data.header}
                    <Button className={'event-edit-btn'} color={'primary'} onClick={this.onClickEdit}>Chỉnh sửa</Button>
                </div>
                <div className="card-body">
                    <Row>
                        <Col lg='4'><img id={"event-img"}
                            src={this.props.data.image}
                            height="200px" alt="event"/></Col>
                        <Col lg='8'><p align="justify">{this.props.data.content}</p>
                            <div className={'date-location'}>
                                {   
                                    this.props.data.time_start
                                }
                                <p>{this.props.data.place}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
