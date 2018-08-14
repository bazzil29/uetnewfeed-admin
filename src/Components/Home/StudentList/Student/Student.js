import React, { Component } from 'react';
import { Col, Row , Button,CardHeader } from 'reactstrap';
import './Student.css';

export default class Student extends React.Component {
    render() {
        return (
            <CardHeader>
                <Row>
                    <Col lg={'1'} md={'1'}>{this.props.index}</Col>
                    <Col lg={'4'} md={'4'}>{this.props.data.fullname}</Col>
                    <Col lg={'2'} md={'2'}>{this.props.data.user}</Col>
                    <Col lg={'1'} md={'1'}>{this.props.data.position}</Col>
                    <Col lg={'2'} md={'2'}>{100}</Col>
                    <Col lg={'2'} md={'2'} onClick = {()=>{
                        this.props.getStudentDetail(this.props.data.id);
                        this.props.toggle();
                    }}>
                        <Button className="btn btn-info">Chỉnh sửa</Button>
                    </Col>
                </Row>
            </CardHeader>
        )
    }
}