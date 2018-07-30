import React, { Component } from 'react';
import {CardBody, CardSubtitle, CardTitle, Card, CardText,  CardHeader, Button, Row, Col} from "reactstrap";
import './Notification.css';
import moment from "moment/moment";
export default class Notification extends React.Component{
    render(){
        const tmp = new Date(2018, 1, 9, 13, 0, 0);
        const day = moment(tmp)._d;
        return (
            <Card>
                <CardHeader>
                    <Row>
                        <Col>
                            <CardTitle>Tiêu đề thông báo</CardTitle>
                            <CardSubtitle>Tên sự kiện thông báo dính kèm</CardSubtitle>
                        </Col>
                        <Col>
                            <Button className={'event-edit-btn'} color={'primary'} onClick={this.props.toggle}>Chỉnh sửa</Button>
                        </Col>
                    </Row>

                </CardHeader>
                <CardBody>
                    <CardText>Nội dung rút ngắn thông báo</CardText>
                    <CardSubtitle>Hanoi</CardSubtitle>
                    <CardText>
                        {
                            day.toLocaleString()
                        }
                    </CardText>
                </CardBody>
            </Card>
        )
    }
}