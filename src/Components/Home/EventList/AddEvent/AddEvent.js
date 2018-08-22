import React from 'react';
import DateTimePicker from 'react-datetime-picker';
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
            place: "dia diem",
            time_start: "khong biet",
            introduce:"gio thieu chung",
            event_type:1,
        },
        date: new Date(),
    };
/*---------------------------------------------------------------------- */

    handleTimeChange = (date) => {
        this.setState({
            date:date,
            info:{
                time_start:date.toISOString()
            },
            event_type:0
        })
        console.log(date.toISOString());
    };

    addEvent = async () => {
        const header = document.getElementById("title-event").value;
        const content = document.getElementById("event-context").value;
        const img = document.getElementById("img-event").value;
        const place = document.getElementById("place-event").value;
        const event_type = this.state.event_type;
        const introduce = document.getElementById("intro-event").value;
        var info = {
            header: header,
            content: content,
            organization: 'NGÔ MINH PHƯƠNG',
            image: img,
            place: place,
            time_start: this.state.info.time_start,
            introduce:introduce,
            event_type:event_type,
        };
        await addEvent(info)
            .then((res) => {
                if(res.success){
                    console.log(res);
                this.props.toggleAdd();
                this.props.toggle();
                }
                else{
                    alert(res.reason);
                }
            });
    };

    renderEventType = () =>{
        const type = this.state.event_type;
            if(type === 1){
                return "Không cần điểm danh";
            }
            else if (type === 0){
                return "Cần điểm danh";
            }
    }
/*---------------------------------------------------------------------- */

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Thêm sự kiện</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Tiêu đề sự kiện:</Label>
                                <Input type="text" placeholder={this.state.info.header} id="title-event" />
                                <Label>Phần giới thiệu chung:</Label>
                                <br/>
                                <textarea type = "text" className="form-control"  id="intro-event" placeholder={this.state.info.header}/>
                                <br/>
                                <Label>Nội dung sự kiện:</Label>
                                <textarea name="" className="form-control" placeholder={this.state.info.content}
                                    cols="auto" rows="auto" id="event-context"  />
                                <Label>Thời gian tổ chức</Label>
                                <br />
                                <DateTimePicker className={'form-control'} id={'react-datetime-picker'}
                                    onChange={this.handleTimeChange}
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
                                <Label>Loại sự kiện:</Label>
                                <br/>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-info dropdown-toggle source-option"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        {this.renderEventType()}
                                    </button>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item" onClick = {()=>{
                                                this.setState({
                                                    ...this.state,
                                                        event_type: 0
                                                })
                                            }}>Cần điểm danh</div>
                                        <div className="dropdown-item" onClick = {()=>{
                                            this.setState({
                                                    ...this.state,
                                                        event_type: 1
                                                })
                                            }}>Không cần điểm danh</div>
                                    </div>
                                 </div>   
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