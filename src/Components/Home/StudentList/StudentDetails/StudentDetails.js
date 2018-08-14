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
import { updateStudent } from '../../../../Services/APIServices';

export default class StudentDetails extends React.Component {
    state = {
        info: {
            fullname: this.props.data.fullname,
            MSSV: this.props.data.MSSV,
            email: this.props.data.email,
            phonenumber: this.props.data.phonenumber,
            gpa: '3.0',
            point: '90',
            birthDay: '2/9/1998',
            class_name: this.props.data.calss_name,
            major: "CNTT"
        }
    }
/*-----------------------------------------------------------------------------------------------------------*/    

    componentWillReceiveProps(nextProps) {
        this.setState({
            info:nextProps.data,
        })
      }
/*-----------------------------------------------------------------------------------------------------------*/    
    onUpdate = () =>{
        this.props.toggle(this.state.info);
        updateStudent()
    }
/*-----------------------------------------------------------------------------------------------------------*/    
//onchange text field

    onChangeName = (value) =>{
        this.setState({
            info:{
                fullname:value
            }
        })
    }
    onChangeId = (value) =>{
        this.setState({
            info:{
                MSSV:value
            }
        })
    }
    onChangeEmail = (value) =>{
        this.setState({
            info:{
                email:value
            }
        })
    }
    onChangePhonnumber = (value) =>{
        this.setState({
            info:{
                phonenumber:value
            }
        })
    }

/*-----------------------------------------------------------------------------------------------------------*/    


    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Chỉnh sửa thông tin sinh viên</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Họ và tên:</Label>
                                <Input type="text" value={this.state.info.fullname} onChange={
                                    e=>{
                                        this.onChangeName(e.value);
                                    }
                                }/>
                                <Label>Mã sinh viên:</Label>
                                <Input type="text" value={this.state.info.MSSV} onChange={
                                    e=>this.onChangeId(e.value)
                                }/>
                                <Label>Vị trí:</Label>
                                <br/>
                                    <input type="radio" name="gender" value = "student"/> Sinh viên 
                                    <input type="radio" name="gender" value="valunteer"/> Cộng tác viên    
                                    <input type="radio" name="gender" value="admin"/> Admin 
                                <Label>Lớp:</Label>
                                <Input type="text" placeholder={this.state.info.class_name} disabled />
                                <Label>Khoa:</Label>
                                <Input type="text" placeholder={this.state.info.major} />
                                <Label>Ngày sinh:</Label>
                                <Input type="text" placeholder={this.state.info.birthDay} />
                                <Label>E-mail:</Label>
                                <Input type="email" value={this.state.info.email} onChange={
                                    e=>this.onChangeEmail(e.value)
                                }/>
                                <Label>Số điện thoại:</Label>
                                <Input type="text" value={this.state.info.phonenumber} onChange = {
                                    e=>this.onChangePhonnumber(e.value)
                                } />
                                <Label>GPA:</Label>
                                <Input type="number" placeholder={this.state.info.gpa} />
                                <Label>Điểm rèn luyện:</Label>
                                <Input type="number" placeholder={this.state.info.point} />
                                <Label>Danh sách sự kiện đã tham gia:</Label>
                                <ListGroup>
                                    <ListGroupItem className="justify-content-between">Event 1 <Badge
                                        pill>10</Badge><i className="fas fa-minus-circle" id={"student-icon"} /></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Event 2 <Badge
                                        pill>10</Badge><i className="fas fa-minus-circle " id={"student-icon"} /></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Event 3 <Badge
                                        pill>10</Badge><i className="fas fa-minus-circle " id={"student-icon"} /></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Thêm sự kiện<i
                                        className="fas fa-plus-circle " id={"student-icon"} /></ListGroupItem>
                                </ListGroup>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onUpdate}>Hoàn tất</Button>
                        <Button color="danger" onClick={this.props.toggle}>Xóa sinh viên</Button>
                        <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
