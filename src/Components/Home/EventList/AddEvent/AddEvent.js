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

export default class AddEvent extends React.Component {
    state = {
        info: {
            header: "day la tieu de",
            content: "day la noi noi",
            organization: 'NGÔ MINH PHƯƠNG',
            image: "anh",
            place: "dai diem",
            time_start: "khong biet",
        },
        date: new Date(),
    };

    onChange = (date) => {
        this.state.date = date;
        this.state.info.time_start = date.toISOString();
        this.setState(this.state);
        console.log(date.toISOString());
    };
    addEvent = async () => {
        const header = document.getElementById("title-event").value;
        const content = document.getElementById("content-event").value;
        //const id = document.getElementById("id-event");
        const img = document.getElementById("img-event").value;
        const place = document.getElementById("place-event").value;
        var info = {
            header: header,
            content: content,
            organization: 'NGÔ MINH PHƯƠNG',
            image: img,
            place: place,
            time_start: this.state.info.time_start,
        };
        await addEvent(info)
            .then((res) => {
                console.log(res);
                 info = {
                    header: header,
                    content: content,
                    id_eve: res.id_eve,
                    organization: 'NGÔ MINH PHƯƠNG',
                    image: img,
                    place: place,
                    time_start: this.state.info.time_start,
                };
                console.log(info);
                this.props.toggleAdd(info);
            });
        this.props.toggle();

    }
    // nameOnChange = (value) => {
    //     this.state.info.name = value;
    //     this.setState(this.state);
    // };
    // contextOnChange = (value) => {
    //     this.state.info.context = value;
    //     this.setState(this.state);
    // }

    // organzationOnChange = (value) => {
    //     this.state.info.organization = value;
    //     this.setState(this.state);
    // };

    // phoneOnChange(value) {
    //     this.state.info.phone = value;
    //     this.setState(this.state);
    // }
    // emailOnChange(value) {
    //     this.state.info.email = value;
    //     this.setState(this.state);
    // }

    // imgOnChange(value) {
    //     //console.log(value);
    //     this.state.info.img = value;
    //     this.setState(this.state);
    // }
    // placeOnChange(value) {
    //     this.state.info.place = value;
    //     this.setState(this.state);
    // }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Thêm sự kiện</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup><Label>Tiêu đề sự kiện:</Label>
                                <Input type="text" placeholder={this.state.info.header} id="title-event" />
                                <Label>Nội dung sự kiện:</Label>
                                <textarea name="" className={'form-control'} placeholder={this.state.info.content}
                                    cols="auto" rows="auto" id={'event-context'} id="content-event" />
                                <Label>Thời gian tổ chức</Label>
                                <br />
                                <DateTimePicker className={'form-control'} id={'react-datetime-picker'}
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />
                                <br />
                                <Label>Địa điểm:</Label>
                                <Input type="text" placeholder={this.state.info.place} id="place-event" />
                                <Label>Đơn vị tổ chức:</Label>
                                <Input type="text" placeholder={this.state.info.organization} id="organization-event" />
                                <Label>Số điện thoại:</Label>
                                <Input type="phone" placeholder={this.state.info.phone} id="phone=-event" />
                                <Label>E-mail:</Label>
                                <Input type="email" placeholder={this.state.info.email} id="email-event" />
                                <Label>Ảnh bìa đính kèm:</Label>
                                <Input type="text" placeholder={this.state.info.image} id="img-event" />

                                {/* <Input type="file" onChange={e => {
                                    this.imgOnChange(e.target.files[0]);
                                }} /> */}
                                <Label>Sinh viên mặc định tham gia:</Label>
                                <ListGroup>
                                    <ListGroupItem className="justify-content-between">id Sinh viên 1<i
                                        className="fas fa-minus-circle"
                                        id={"student-icon"} /></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">id Sinh viên 2<i
                                        className="fas fa-minus-circle "
                                        id={"student-icon"} /></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">id Sinh viên 3 <i
                                        className="fas fa-minus-circle "
                                        id={"student-icon"} /></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Thêm sự sinh viên<i
                                        className="fas fa-plus-circle " id={"student-icon"} /></ListGroupItem>
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