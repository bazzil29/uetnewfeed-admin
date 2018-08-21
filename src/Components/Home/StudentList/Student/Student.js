import React  from 'react';
import { Col, Row , Button,CardHeader } from 'reactstrap';
import './Student.css';

export default class Student extends React.Component {
    render() {
        return (
            <CardHeader>
                <Row>
                    <Col lg={'1'} md={'1'}>{this.props.index+1}</Col>
                    <Col lg={'4'} md={'4'}>{this.props.data.full_name}</Col>
                    <Col lg={'2'} md={'2'}>{this.props.data.mssv}</Col>
                    <Col lg={'2'} md={'2'}>{100}</Col>
                    <Col lg={'2'} md={'2'} onClick = {()=>{
                        this.props.getStudentDetail(this.props.data.mssv);
                    }}>
                        <Button className="btn btn-info">Chỉnh sửa</Button>
                    </Col>
                </Row>
            </CardHeader>
        )
    }
}