import * as React from "react/cjs/react.development";
import {Col, Row, Button} from "reactstrap";
import './Event.css';
import $ from 'jquery';
import moment from "moment";

export default class Event extends React.Component {
    render() {
        const tmp = new Date(2018, 1, 9, 13, 0, 0);
        const day = moment(tmp)._d;
        return (
            <div className="card">
                <div className="card-header">
                    <i className="fas fa-calendar-alt"/> Event Header
                    <Button className={'event-edit-btn'} color={'primary'} onClick={this.props.toggle}>Chỉnh sửa</Button>
                </div>
                <div className="card-body">
                    <Row>
                        <Col lg='4'><img id={"event-img"}
                            src="https://womensbusinessdaily.com/wp-content/uploads/2017/07/Messe_Luzern_Corporate_Event.jpg"
                            height="200px" alt="event"/></Col>
                        <Col lg='8'><p align="justify">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <div className={'date-location'}>
                                {
                                    day.toLocaleString()
                                }
                                <p>Hanoi</p>
                            </div>
                        </Col>


                    </Row>
                </div>
            </div>
        )
    }
}
