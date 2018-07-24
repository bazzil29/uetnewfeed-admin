import React from "react";
import {Col, Row, Button} from "reactstrap";

export default class Student extends React.Component{
    render(){
        return (
            <div className="card">
                <div className="card-body">NGO MINH PHUONG
                    <Button className={'event-edit-btn'} onClick={this.props.toggle}>Chi tiết</Button>
                </div>
            </div>
        )
    }
}