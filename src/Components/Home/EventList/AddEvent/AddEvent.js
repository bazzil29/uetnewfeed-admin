import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
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
    ListGroup,
} from "reactstrap";
import { addEvent } from '../../../../Services/APIServices';

export default class AddEvent extends React.Component{
    state = {
        info: {
            header: "day la tieu de",
            content: "day la noi noi",
            organization: 'NGÔ MINH PHƯƠNG',
            image:"anh",
            place:"dai diem",
            time_start:"khong biet",
        },
        date: new Date(),
    };
    onChange = (date) => {
        this.setState({ date:date})
        this.state.info.time = date.toISOString();
        this.setState(this.state);
        console.log(date.toISOString());
    };
    addEvent = async () =>{
        await addEvent(this.state.info)
            .then((res)=>{
                console.log(res);
            });
        console.log(this.state.info);
        this.props.toggle(this.state.info);
    }
    nameOnChange = (value) => {
        this.state.info.name = value;
        this.setState(this.state);
    };
    contextOnChange = (value) => {
        this.state.info.context = value;
        this.setState(this.state);
    }

    organzationOnChange = (value) => {
        this.state.info.organization = value;
        this.setState(this.state);
    };

    phoneOnChange(value) {
        this.state.info.phone = value;
        this.setState(this.state);
    }
    emailOnChange(value) {
        this.state.info.email = value;
        this.setState(this.state);
    }

    imgOnChange(value) {
        //console.log(value);
        this.state.info.img = value;
        this.setState(this.state);
    }
    placeOnChange(value) {
        this.state.info.place = value;
        this.setState(this.state);
    }
    render(){
        return(

            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Thêm sự kiện</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup><Label>Tiêu đề sự kiện:</Label>
                                <Input type="text" value={this.state.info.header} onChange={e => {
                                    this.nameOnChange(e.target.value);
                                }} />
                                <Label>Nội dung sự kiện:</Label>
                                <textarea name="" className={'form-control'} value={this.state.info.content}
                                    cols="auto" rows="auto" id={'event-context'} onChange={e => {
                                        this.contextOnChange(e.target.value);
                                    }} />
                                <Label>Thời gian tổ chức</Label>
                                <br />
                                <DateTimePicker className={'form-control'} id={'react-datetime-picker'}
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />
                                <br />
                                <Label>Địa điểm:</Label>
                                <Input type="text" value={this.state.info.place} onChange={e => {
                                    this.placeOnChange(e.target.value);
                                }} />
                                <Label>Đơn vị tổ chức:</Label>
                                <Input type="text" value={this.state.info.organization} onChange={e => {
                                    this.organzationOnChange(e.target.value);
                                }} />
                                <Label>Số điện thoại:</Label>
                                <Input type="phone" value={this.state.info.phone} onChange={e => {
                                    this.phoneOnChange(e.target.value);
                                }} />
                                <Label>E-mail:</Label>
                                <Input type="email" value={this.state.info.email} onChange={e => {
                                    this.emailOnChange(e.target.value);
                                }} />
                                <Label>Ảnh bìa đính kèm:</Label>
                                <Input type="text" value={this.state.info.image} onChange={e => {
                                    this.imgOnChange(e.target.value);
                                }} />
                                
                                {/* <Input type="file" onChange={e => {
                                    this.imgOnChange(e.target.files[0]);
                                }} /> */}
                                <Label>Sinh viên mặc định tham gia:</Label>
                                <ListGroup>
                                    <ListGroupItem className="justify-content-between">id Sinh viên 1<i
                                        className="fas fa-minus-circle"
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">id Sinh viên 2<i
                                        className="fas fa-minus-circle "
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">id Sinh viên 3 <i
                                        className="fas fa-minus-circle "
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Thêm sự sinh viên<i
                                        className="fas fa-plus-circle " id={"student-icon"}/></ListGroupItem>
                                </ListGroup>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addEvent}>Thêm</Button>
                        <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}