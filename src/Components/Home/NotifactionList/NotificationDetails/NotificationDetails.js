import './NotificationDetails.css';
import React from "react";
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

export default class NotificationDetails extends React.Component {
    state = {
        info: {
            name: "Dây là tiêu đề thông báo",
            id: 'Đây là mã thông báo',
            idEvent: 'Đây là mã sự kiện',
            phone: '0971486734',
            date: '2/9/1998',
            context:"Đây là nội dung"
        },
        date: new Date(),
    };
    onChange = date => this.setState({date});
    idEventOnChange=(e)=>{
        this.state.info.idEvent= e.value;
        this.setState(this.state);
    };
    titleOnChange=(e)=>{
        this.state.info.name= e.value;
        this.setState(this.state);
    };
    contextOnChange=(e)=>{
        this.state.info.context= e.value;
        this.setState(this.state);
    };

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Chỉnh sửa thông báo</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Tiêu đề thông báo:</Label>
                                <Input type="text" value={this.state.info.name} onChange={this.titleOnChange}/>
                                <Label>Mã thông báo:</Label>
                                <Input type="text" value={this.state.info.id} disabled/>
                                <Label>Mã sự kiện đính kèm thông báo:</Label>
                                <Input type="text" value={this.state.info.idEvent} onChange={this.idEventOnChange}/>
                                <Label>Nội dung thông báo:</Label>
                                <Input type="text" value={this.state.info.context} onChange={this.contextOnChange}/>
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