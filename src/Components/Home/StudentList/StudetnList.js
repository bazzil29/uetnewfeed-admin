import React from "react";
import Student from "./Student/Student";
import StudentDetails from "./StudentDetails/StudentDetails";
import {Card, CardHeader, Col, Row} from 'reactstrap';

export default class StudentList extends React.Component {
    state={
        isOpen:false,
    }

    toggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen,
        })
    }

    render() {
        return (
            <div>
                <StudentDetails  toggle={this.toggle} modal={this.state.isOpen}/>
                <div className="animated fadeIn">
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col lg={'1'} md ={'1'}>Stt</Col>
                                <Col lg={'4'} md={'4'}>Họ và tên</Col>
                                <Col lg={'2'} md={'2'}>Mã sinh viên</Col>
                                <Col lg={'1'} md={'1'}>GPA</Col>
                                <Col lg={'2'} md={'2'}>Điểm rèn luyện</Col>
                            </Row>

                        </CardHeader>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                        <Student toggle={this.toggle}/>
                    </Card>


                </div>

            </div>

        )
    }
}
