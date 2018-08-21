import React from 'react';
import {Col, Row, Button} from "reactstrap";
import './Event.css';
export default class Event extends React.Component {
/*---------------------------------------------------------------------- */

    onClickEdit = () =>{
        const id =this.props.data.id;
        console.log(id);
        this.props.toggle(id);
    }
/*---------------------------------------------------------------------- */

    render() {
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
                        <Col lg='8'>
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
