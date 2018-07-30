import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import {
    Input,
    Label,
    ListGroup,
    ListGroupItem,
    ModalFooter,
    Modal,
    Button,
    ModalBody,
    ModalHeader,
    Form,
    FormGroup
} from "reactstrap";

export default class AddNotification extends React.Component{
    state = {
        date: new Date(),
    };
    render(){
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Thêm thông báo</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Tiêu đề thông báo:</Label>
                                <Input type="text" placeholder={"Điền vào tiêu đề"}/>
                                <Label>Sự kiện đính kèm thông báo:</Label>
                                <Input type="text" placeholder={"Sự kiện đính kèm thông báo"}/>
                                <Label>Nội dung thông báo:</Label>
                                <Input type="text" placeholder={"Nội dung của thông báo"}/>
                                <Label>Thời gian thông báo:</Label>
                                <br/>
                                <DateTimePicker className={'form-control'} id={'react-datetime-picker'}
                                                onChange={this.onChange}
                                                value={this.state.date}
                                />
                                <br/>
                                <Label>Thông báo tới:</Label>
                                <ListGroup>
                                    <ListGroupItem className="justify-content-between">Sinh viên 1 <i
                                        className="fas fa-minus-circle"
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Sinh viên 2 <i
                                        className="fas fa-minus-circle "
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Sinh viên 3 <i
                                        className="fas fa-minus-circle "
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Thêm sinh viên<i
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