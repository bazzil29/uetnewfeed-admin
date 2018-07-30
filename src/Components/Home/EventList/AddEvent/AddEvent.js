import React, { Component } from 'react';
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

export default class AddEvent extends React.Component{
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

    render(){
        return(

            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Thêm sự kiện</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Tiêu đề sự kiện:</Label>
                                <Input type="text" placeholder={this.state.info.name} />
                                <Label>Mã sự kiện:</Label>
                                <Input type="text" placeholder={this.state.info.id}/>
                                <Label>Nội dung sự kiện:</Label>
                                <textarea name="" className={'form-control'} placeholder={this.state.info.context}
                                          cols="auto" rows="auto" id={'event-context'}/>
                                <Label>Thời gian tổ chức</Label>
                                <br/>
                                <DateTimePicker className={'form-control'} id={'react-datetime-picker'}
                                                onChange={this.onChange}
                                                value={this.state.date}
                                />
                                <br/>
                                <Label>Đơn vị tổ chức:</Label>
                                <Input type="text" placeholder={this.state.info.organization}/>
                                <Label>Số điện thoại:</Label>
                                <Input type="phone" placeholder={this.state.info.phone} />
                                <Label>E-mail:</Label>
                                <Input type="email" placeholder={this.state.info.email} />
                                <Label>Ảnh bìa đính kèm:</Label>
                                <Input type="text" placeholder={this.state.info.img} />
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
                        <Button color="primary" onClick={this.props.toggle}>Thêm</Button>
                        <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}