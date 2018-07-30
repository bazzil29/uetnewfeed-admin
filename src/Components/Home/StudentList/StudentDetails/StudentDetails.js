import React, { Component } from 'react';
import './StudentDetails.css'
import {
    ModalBody,
    ModalFooter,
    ModalHeader,
    Modal,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    ListGroupItem,
    ListGroup, Badge
} from "reactstrap";

export default class StudentDetails extends React.Component {
    state = {
        info: {
            name: "Ngô Minh Phương",
            id: '16021629',
            email: 'oscar.ngo98@gmail.com',
            phone: '0971486734',
            gpa: '3.0',
            point: '90',
            birthDay: '2/9/1998',
            class:"K61N",
            major:"CNTT"

        }
    }

    render() {

        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Chỉnh sửa thông tin sinh viên</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Họ và tên:</Label>
                                <Input type="text" placeholder={this.state.info.name}/>
                                <Label>Mã sinh viên:</Label>
                                <Input type="number" placeholder={this.state.info.id}/>
                                <Label>Lớp:</Label>
                                <Input type="text" placeholder={this.state.info.class}/>
                                <Label>Khoa:</Label>
                                <Input type="text" placeholder={this.state.info.major}/>
                                <Label>Ngày sinh:</Label>
                                <Input type="date" placeholder={this.state.info.birthDay}/>
                                <Label>E-mail:</Label>
                                <Input type="email" placeholder={this.state.info.email}/>
                                <Label>Số điện thoại:</Label>
                                <Input type="phone" placeholder={this.state.info.phone}/>
                                <Label>GPA:</Label>
                                <Input type="number" placeholder={this.state.info.gpa}/>
                                <Label>Điểm rèn luyện:</Label>
                                <Input type="number" placeholder={this.state.info.point}/>
                                <Label>Danh sách sự kiện đã tham gia:</Label>
                                <ListGroup>
                                    <ListGroupItem className="justify-content-between">Event 1 <Badge
                                        pill>10</Badge><i className="fas fa-minus-circle" id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Event 2 <Badge
                                        pill>10</Badge><i className="fas fa-minus-circle " id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Event 3 <Badge
                                        pill>10</Badge><i className="fas fa-minus-circle " id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Thêm sự kiện<i
                                        className="fas fa-plus-circle " id={"student-icon"}/></ListGroupItem>
                                </ListGroup>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.toggle}>Hoàn tất</Button>
                        <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

