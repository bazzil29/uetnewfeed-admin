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
} from "reactstrap";
import { addEvent, getURLImg } from '../../../../Services/APIServices';

export default class AddEvent extends React.Component {
    state = {
        info: {
            header: "Tiêu đề sự kiên",
            content: "Nội dung chi tiết",
            organization: 'UET-COM-RANG-TEAM',
            image: "ảnh",
            place: "Địa điểm",
            time_start: "",
            introduce:"Giới thiệu chung",
            event_type:1,
            link_register:""
        },
        date: new Date(),
    };
/*---------------------------------------------------------------------- */

    handleTimeChange = (date) => {
        this.setState({
            ...this.state,
            date:date,
            info:{
                ...this.state.info,
                time_start:date.toISOString()
            },
        })
    };

    addEvent = async () => {
        const header = document.getElementById("title-event").value;
        const content = document.getElementById("event-context").value;
        const img = this.state.info.image;
        const place = document.getElementById("place-event").value;
        const event_type = this.state.info.event_type;
        const introduce = document.getElementById("intro-event").value;
        const link_register = (this.state.info.event_type=1)?"":this.refs.formCheckin.value;
        const info = {
            header: header,
            content: content,
            organization: 'UET-COM-RANG-TEAM',
            image: img,
            place: place,
            time_start: this.state.info.time_start,
            introduce:introduce,
            event_type:event_type,
            link_register:link_register
        };
        await addEvent(info)
            .then((res) => {
                if(res.success){
                this.props.toggleAdd();
                this.props.toggle();
                }
                else{
                    alert(res.reason);
                }
            });
    };

    renderEventType = () =>{
        const type = this.state.info.event_type;
            if(type === 1){
                return "Không cần điểm danh";
            }
            else if (type === 0){
                return "Cần điểm danh";
            }
    };

    renderLinkFormCheckin = () =>{
        const type = this.state.info.event_type;
            if(type === 1){
                return null;
            }
            else if (type === 0){
                return  <div>
                            <Label>Link đăng ký:</Label>
                            <input ref="formCheckin"
                                className = "form-control" 
                                type="text" 
                                />
                </div>
            }
    };
/*---------------------------------------------------------------------- */

    render() {
        return (
            <div>
                <Modal 
                    isOpen={this.props.modal} 
                    toggle={this.props.toggle} 
                    className={this.props.className}
                >
                    <ModalHeader 
                        toggle={this.props.toggle}
                    >
                        Thêm sự kiện
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Tiêu đề sự kiện:</Label>
                                <Input 
                                    type="text" 
                                    placeholder={this.state.info.header} 
                                    id="title-event" />
                                <Label>Phần giới thiệu chung:</Label>
                                <br/>
                                <textarea 
                                    type = "text" 
                                    className="form-control"  
                                    id="intro-event" 
                                    placeholder={this.state.info.introduce}
                                    />
                                <br/>
                                <Label>Nội dung sự kiện:</Label>
                                <textarea 
                                    className="form-control" 
                                    placeholder={this.state.info.content}
                                    cols="auto" 
                                    rows="auto" 
                                    id="event-context"  />
                                <Label>Thời gian tổ chức</Label>
                                <br />
                                <DateTimePicker 
                                    className='form-control' 
                                    id='react-datetime-picker'
                                    onChange={this.handleTimeChange}
                                    value={this.state.date}
                                />
                                <br />
                                <Label>Địa điểm:</Label>
                                <Input 
                                    type="text" 
                                    placeholder={this.state.info.place} 
                                    id="place-event" 
                                />
                                <Label>Đơn vị tổ chức:</Label>
                                <Input 
                                    type="text" 
                                    placeholder={this.state.info.organization} 
                                    id="organization-event" 
                                    />
                                <Label>Số điện thoại:</Label>
                                <Input 
                                    type="phone" 
                                    placeholder={this.state.info.phone} 
                                    id="phone=-event" 
                                />
                                <Label>E-mail:</Label>
                                <Input 
                                    type="email" 
                                    placeholder={this.state.info.email} 
                                    id="email-event" 
                                />
                                <Label>Ảnh bìa đính kèm:</Label>
                                <Input type="file" onChange={(e)=>{
                                    getURLImg(e.target.files[0])
                                        .then((res=>{
                                            if(res.success){
                                                this.setState({
                                                    ...this.state,
                                                    info:{
                                                        ...this.state.info,
                                                        image:res.url
                                                    }
                                                })
                                            }
                                            else{
                                                alert(res.result)
                                            }
                                        }))
                                }}/>
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
                                                    info:{
                                                            ...this.state.info,
                                                            event_type:0
                                                        }
                                                })
                                            }}>Cần điểm danh</div>
                                        <div className="dropdown-item" onClick = {()=>{
                                            this.setState({
                                                    ...this.state,
                                                        info:{
                                                            ...this.state.info,
                                                            event_type:1
                                                        }
                                                })
                                            }}>Không cần điểm danh</div>
                                    </div>
                                 </div>
                                 {
                                     this.renderLinkFormCheckin()
                                 }      
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