import React from "react";
import './EventDetails.css'
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
    ListGroup, Badge
} from "reactstrap";

export default class EventDetails extends React.Component {
    state = {
        info: {
            name: "ĐÂY LÀ TIÊU ĐỀ SỰ KIỆN",
            id: '16021629',
            email: 'oscar.ngo98@gmail.com',
            phone: '0971486734',
            context: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.",
            organization: 'NGÔ MINH PHƯƠNG',
            img: 'link img',
        },
        date: new Date(),
    };

    onChange = date => this.setState({date});
    nameOnChange = (value) => {
        this.setState({
            info: {
                name: value,
                id: this.state.info.id,
                email: this.state.info.email,
                phone: this.state.info.phone,
                context: this.state.info.context,
                organization: this.state.info.organization,
                img: this.state.info.img,
            }
        })
    };

    render() {

        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Chỉnh sửa thông tin sự kiện</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Tiêu đề sự kiện:</Label>
                                <Input type="text" value={this.state.info.name} onChange={e => {
                                    this.nameOnChange(e.target.value);
                                }}/>
                                <Label>Mã sự kiện:</Label>
                                <Input type="text" placeholder={this.state.info.id} disabled/>
                                <Label>Nội dung sự kiện:</Label>
                                <textarea name="" className={'form-control'} value={this.state.info.context}
                                          cols="auto" rows="auto" id={'event-context'} onChange={e => {
                                    this.contextOnChange(e.target.value);
                                }}/>
                                <Label>Thời gian tổ chức</Label>
                                <br/>
                                <DateTimePicker className={'form-control'} id={'react-datetime-picker'}
                                                onChange={this.onChange}
                                                value={this.state.date}
                                />
                                <br/>
                                <Label>Đơn vị tổ chức:</Label>
                                <Input type="text" value={this.state.info.organization} onChange={e => {
                                    this.organzationOnChange(e.target.value);
                                }}/>
                                <Label>Số điện thoại:</Label>
                                <Input type="phone" value={this.state.info.phone} onChange={e => {
                                    this.phoneOnChange(e.target.value);
                                }}/>
                                <Label>E-mail:</Label>
                                <Input type="email" value={this.state.info.email} onChange={e => {
                                    this.emailOnChange(e.target.value);
                                }}/>
                                <Label>Ảnh bìa đính kèm:</Label>
                                <Input type="text" value={this.state.info.img} onChange={e => {
                                    this.imgOnChange(e.target.value);
                                }}/>
                                <Label>Sinh viên đã đăng ký:</Label>
                                <Input type="number" placeholder={this.state.info.point}/>
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
                                <Label>Sinh viên đã tham gia:</Label>
                                <ListGroup>
                                    <ListGroupItem className="justify-content-between">id sinh vien 1 <i
                                        className="fas fa-minus-circle"
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">id sinh vien 2 <i
                                        className="fas fa-minus-circle "
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">id sinh vien 3 <i
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

    contextOnChange=(value) =>{
        this.setState({
            info: {
                name: this.state.info.name,
                id: this.state.info.id,
                email: this.state.info.email,
                phone: this.state.info.phone,
                context: value,
                organization: this.state.info.organization,
                img: this.state.info.img,
            }
        })
    }

    organzationOnChange=(value) =>{
        this.setState({
            info: {
                name: this.state.info.name,
                id: this.state.info.id,
                email: this.state.info.email,
                phone: this.state.info.phone,
                context: this.state.info.context,
                organization: value,
                img: this.state.info.img,
            }
        })
    }

    phoneOnChange(value) {
        this.setState({
            info: {
                name: this.state.info.name,
                id: this.state.info.id,
                email: this.state.info.email,
                phone: value,
                context: this.state.info.context,
                organization: this.state.info.organization,
                img: this.state.info.img,
            }
        })
    }

    emailOnChange(value) {
        this.setState({
            info: {
                name: this.state.info.name,
                id: this.state.info.id,
                email: value,
                phone:this.state.info.phone,
                context: this.state.info.context,
                organization: this.state.info.organization,
                img: this.state.info.img,
            }
        })
    }

    imgOnChange(value) {
        this.setState({
            info: {
                name: this.state.info.name,
                id: this.state.info.id,
                email: this.state.info.email,
                phone:this.state.info.phone,
                context: this.state.info.context,
                organization: this.state.info.organization,
                img: value,
            }
        })
    }
}

