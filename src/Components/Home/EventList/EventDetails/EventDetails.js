import React, { Component } from 'react';
import './EventDetails.css'
import DateTimePicker from 'react-datetime-picker';
import {
    ModalBody,
    ModalFooter,
    ModalHeader,
    Modal,
    Button,
    Label,
    Input,
    ListGroupItem,
    ListGroup, CardBody, Card,
    Collapse, Row, Col, CardHeader,
} from "reactstrap";
import 'react-summernote/dist/react-summernote.css'; // import styles
import '../../../../index.css';
import { updateEvent, deleteEvent } from '../../../../Services/APIServices';
export default class EventDetails   extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                header: this.props.data.header,
                id: this.props.data.id,
                content: this.props.data.content,
                organization: 'NGÔ MINH PHƯƠNG',
                image: this.props.data.image,
                place: this.props.data.place,
                time_start: this.props.data.time_start,
                introduce:this.props.data.introduce,
                event_type:this.props.data.event_type
            },
            date: new Date(),
            collapse: false,
            students: [{
                name: 'x',
                isChoosed: false,
                id: 1,
                index: 1
            },
            {
                name: 'y',
                isChoosed: false,
                id: 2,
                index: 2

            },
            {
                name: 'z',
                isChoosed: false,
                id: 3,
                index: 3

            },
            {
                name: 'k',
                isChoosed: false,
                id: 4,
                index: 4

            }],
            studentsForce: [],
            isStudentsOpen: false,
            isUpdated: false,
        };
    }

   
/*------------------------------------------------------------------------------------------------------------ */
    handleTimeChange = (date) => {
        this.setState({ ...this.state,date: date })
        this.setState({
            ...this.state,
            info:{
                ...this.state.info,
                time_start:date.toISOString(),
            }
        })
        console.log(date.toISOString());
    };

    handleNameChange = (value) => {
        this.setState({
            info:{
                ...this.state.info,
                header:value
            }
        });
    };

    handleIntroduceChange = (value) =>{
        this.setState({
            info:{
                ...this.state.info,
                introduce:value
            }
        });
    };

    handleContentChange = (value) => {
        this.setState({
            info:{
                ...this.state.info,
                content:value
            }
        });
    }

    handleOrganzationChange = (value) => {
        this.setState({
            info:{
                ...this.state.info,
                organization:value
            }
        });
    }

    handlePhoneChange = (value) => {
        this.setState({
            info:{
                ...this.state.info,
                phone:value
            }
        });
    }

    handleEmailChange = (value) => {
        this.setState({
            info:{
                ...this.state.info,
                email:value
            }
        });
    }

    handleImageChange = (value) => {
        this.setState({
            info:{
                ...this.state.info,
                image:value
            }
        });
    };

    handlePlaceChange = (value) => {
        this.setState({
            info:{
                ...this.state.info,
                place:value
            }
        });
    };
/*------------------------------------------------------------------------------------------------------------ */

    onAddStudentEvent = (e) => {
        this.state.students.forEach((e, index) => {
            if (e.isChoosed) {
                this.state.studentsForce.push(e);
            }
        })
        this.setState({
            ...this.state,
            collapse:false
        })
    };

    makeListStudentsForce = () => {
        const tmp = this.state.studentsForce.map((e, index) => {
            return <ListGroupItem className="justify-content-between">{e.name}<i
                className="fas fa-minus-circle"
                id={"student-icon"} /></ListGroupItem>
        })
        return tmp;
    };
    addStudentSearch = (e) => {
        const tmp = e.target;
        const tmp1 = document.getElementById('select-major');
        const tmp2 = tmp1[tmp1.selectedIndex].value;
        const tmp3 = tmp[tmp.selectedIndex].value;
        console.log(tmp2);
        console.log(tmp3);
        if (tmp2 === 'rand') {
            const tmp5 = document.getElementById("select-class");
            tmp5.innerHTML = `
                                        <option value="class id" >Lớp</option>
                                    `;

        }
        else if (tmp2 === "FIT") {
            if (tmp3 === "rand") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="rand">Lớp</option>
                                    `;
            }
            else if (tmp3 === "k59") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K59CNTT1</option>
                                        <option value="class id">K59CNTT2</option>
                                        <option value="class id">K59CNTT3</option>
                                        <option value="class id">K59CNTT4</option>
                                        <option value="class id">K59CNTT5</option>
                                    `;

            } else if (tmp3 === "k60") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K60CNTT1</option>
                                        <option value="class id">K60CNTT2</option>
                                        <option value="class id">K60CNTT3</option>
                                        <option value="class id">K60CNTT4</option>
                                        <option value="class id">K60CNTT5</option>
                                    `;

            } else if (tmp3 === "k61") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K61CNTT1</option>
                                        <option value="class id">K61CNTT2</option>
                                        <option value="class id">K61CNTT3</option>
                                        <option value="class id">K61CNTT4</option>
                                        <option value="class id">K61CNTT5</option>
                                    `;

            } else if (tmp3 === "k62") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K62CNTT1</option>
                                        <option value="class id">K62CNTT2</option>
                                        <option value="class id">K62CNTT3</option>
                                        <option value="class id">K62CNTT4</option>
                                        <option value="class id">K562CNTT5</option>
                                    `;

            } else if (tmp3 === "k63") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K63CNTT1</option>
                                        <option value="class id">K63CNTT2</option>
                                        <option value="class id">K63CNTT3</option>
                                        <option value="class id">K63CNTT4</option>
                                        <option value="class id">63CNTT5</option>
                                    `;

            }

        }
        else if (tmp2 === 'FET') {
            if (tmp3 === "rand") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="rand">Lớp</option>
                                    `;
            }
            else if (tmp3 === "k59") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K59CNTT1</option>
                                        <option value="class id">K59CNTT2</option>
                                        <option value="class id">K59CNTT3</option>
                                        <option value="class id">K59CNTT4</option>
                                        <option value="class id">K59CNTT5</option>
                                    `;

            } else if (tmp3 === "k60") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K60CNTT1</option>
                                        <option value="class id">K60CNTT2</option>
                                        <option value="class id">K60CNTT3</option>
                                        <option value="class id">K60CNTT4</option>
                                        <option value="class id">K60CNTT5</option>
                                    `;

            } else if (tmp3 === "k61") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K61CNTT1</option>
                                        <option value="class id">K61CNTT2</option>
                                        <option value="class id">K61CNTT3</option>
                                        <option value="class id">K61CNTT4</option>
                                        <option value="class id">K61CNTT5</option>
                                    `;

            } else if (tmp3 === "k62") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K62CNTT1</option>
                                        <option value="class id">K62CNTT2</option>   
                                        <option value="class id">K62CNTT3</option>
                                        <option value="class id">K62CNTT4</option>
                                        <option value="class id">K562CNTT5</option>
                                    `;

            } else if (tmp3 === "k63") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K63CNTT1</option>
                                        <option value="class id">K63CNTT2</option>
                                        <option value="class id">K63CNTT3</option>
                                        <option value="class id">K63CNTT4</option>
                                        <option value="class id">63CNTT5</option>
                                    `;

            }

        }
    };

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    };

    onCheckBox = (index) => {
        // let tmp = this.state.students[index - 1].isChoosed;
        // tmp = !tmp;
        this.setState(this.state);
    };

    makeListStudent = () => {
        const tmp = this.state.students;
        return tmp.map((x, index) => {
            return <CardHeader key={index}>
                <Row >
                    <Col lg={'1'} md={'1'} sm={'1'} xs={'1'}>{x.name}</Col>
                    <Col lg={'6'} md={'6'} sm={'6'} xs={'6'}>{x.id}</Col>
                    <Col lg={'3'} md={'3'} sm={'3'} xs={'3'}>{x.index}</Col>
                    <Col lg={'2'} md={'2'} sm={'2'} xs={'2'}>
                        <div className="checkbox checkbox-primary">
                            <input id="checkbox" type="checkbox" onClick={() => { this.onCheckBox(x.index) }} />
                        </div>
                    </Col>
                </Row>
            </CardHeader>
        })
    };
/*------------------------------------------------------------------------------------------------------------ */

    handleOnUpdate = async () => {
        const id = this.props.data.id;
        console.log(this.state.info);
        await updateEvent(id, this.state.info)
            .then((res) => {
                if(res.success){
                    this.props.toggle(this.state.info);
                }
                else{
                    alert(res.reason);
                }
            });
    };

    handleDeleteEvent = async () => {
        const id = this.state.info.id;
        await deleteEvent(id)
            .then((res) => {
                console.log(res);
                this.props.deleteEvent(id);
            });
    };



/*------------------------------------------------------------------------------------------------------------ */

renderEventType = () =>{
    const type = this.state.info.event_type;
        if(type === 1){
            return "Không cần điểm danh";
        }
        else if (type === 0){
            return "Cần điểm danh";
        }
};
/*------------------------------------------------------------------------------------------------------------ */

    render() {
        const students = (this.state.isStudentsOpen) ? this.makeListStudent() : null;
        const collapse = this.state.collapse;
        const {
            header,
            id,
            content,
            organization,
            image,
            place,
            phone,
            email,
            introduce
            } = this.state.info; 
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Chỉnh sửa thông tin sự kiện</ModalHeader>
                    <ModalBody>
                                <Label>Tiêu đề sự kiện:</Label>
                                <input className = "form-control" type="text" defaultValue={header}  onChange={e => {
                                    this.handleNameChange(e.target.value);
                                }} />
                                <Label>Mã sự kiện:</Label>
                                <input className = "form-control" type="text" placeholder={id} disabled />
                                <Label>Giới thiệu chung:</Label>
                                <textarea name="" className="form-control" defaultValue={introduce}
                                    cols="auto" rows="auto" id="event-context" onChange={e => {
                                        this.handleIntroduceChange(e.target.value);
                                    }} />
                                <Label>Nội dung sự kiện:</Label>
                                <textarea name="" className="form-control" defaultValue={content}
                                    cols="auto" rows="auto" id="event-context" onChange={e => {
                                        this.handleContentChange(e.target.value);
                                    }} />
                                <Label>Địa điểm:</Label>
                                <input className = "form-control" type="text" defaultValue={place} onChange={e => {
                                    this.handlePlaceChange(e.target.value);
                                }} />
                                <Label>Thời gian tổ chức</Label>
                                <br />
                                <DateTimePicker className='form-control' id='react-datetime-picker'
                                    onChange={this.handleTimeChange}
                                    value={this.state.date}
                                />
                                <br />
                                <Label>Đơn vị tổ chức:</Label>
                                <input className = "form-control" type="text" defaultValue={organization} onChange={e => {
                                    this.handleOrganzationChange(e.target.value);
                                }}/>
                                <Label>Số điện thoại:</Label>
                                <input className = "form-control" type="text" defaultValue={phone} onChange={e => {
                                    this.handlePhoneChange(e.target.value);
                                }}/>
                                <Label>E-mail:</Label>
                                <input className = "form-control" type="text" defaultValue={email} onChange={e => {
                                    this.handleEmailChange(e.target.value);
                                }} />
                                <Label>Ảnh bìa đính kèm:</Label>
                                <input className = "form-control" type="text" defaultValue={image} onChange={e => {
                                    this.handleImageChange(e.target.value);
                                }} />
                                {/* <Input type="file" onChange={e => {
                                    this.imgOnChange(e.target.files[0]);
                                }} /> */}
                                <Label>Sinh viên quan tâm:</Label>
                                <input className = "form-control" type="number"/>
                                <Label>Sinh viên mặc định tham gia:</Label>
                                <ListGroup>
                                    {this.makeListStudentsForce()}
                                    <ListGroupItem 
                                        className="justify-content-between" 
                                        onClick={this.toggle}>Thêm sinh
                                        viên
                                        <i
                                            className="fas fa-plus-circle " 
                                            id="student-icon" /></ListGroupItem>
                                    <Collapse isOpen={collapse}>
                                        <Card id={'add-student-card'}>
                                            <CardBody>
                                                <Row>
                                                    <Col>
                                                        <Input type='select' name="select" id='select-major'>
                                                            <option value="rand">Khoa</option>
                                                            <option value="FIT">Công nghệ thông tin</option>
                                                            <option value="FET">Điện tử viễn thông</option>
                                                            <option value="FEMA">Cơ học kỹ thuật & Tự động hóa</option>
                                                            <option value="FFU">Công nghệ hàng không và vũ trụ</option>
                                                            <option value="FEPN">Vật lý kỹ thuật & Công nghệ Nano
                                                            </option>
                                                        </Input>
                                                    </Col>
                                                    <Col>
                                                        <Input type='select' name="select" id='select-year'
                                                            onChange={this.addStudentSearch}>
                                                            <option value="rand">Khóa</option>
                                                            <option value="k59">K59</option>
                                                            <option value="k60">K60</option>
                                                            <option value="k61">K61</option>
                                                            <option value="k62">K62</option>
                                                            <option value="k63">K63</option>
                                                        </Input>
                                                    </Col>
                                                    <Col>
                                                        <Input type='select' name="select" id='select-class'>
                                                            <option value="rand">Lớp</option>
                                                        </Input>
                                                    </Col>
                                                    <Col>
                                                        <Button onClick={() => {
                                                            this.setState({
                                                                isStudentsOpen: !this.state.isStudentsOpen
                                                            })
                                                        }}>Tìm</Button>
                                                    </Col>
                                                </Row>
                                                {students}
                                                <Row>
                                                    <Col>
                                                        <Button className="add-student-event" onClick={this.onAddStudentEvent}>
                                                            Thêm
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </ListGroup>
                                <Label>Sinh viên đã tham gia:</Label>
                                <ListGroup>
                                    <ListGroupItem className="justify-content-between">Thêm sinh viên<i
                                        className="fas fa-plus-circle " id="student-icon" /></ListGroupItem>
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
                                                    info:{
                                                        ...this.state.info,
                                                        event_type: 0
                                                    }
                                                })
                                            }}>Cần điểm danh</div>
                                        <div className="dropdown-item" onClick = {()=>{
                                                this.setState({
                                                    info:{
                                                        ...this.state.info,
                                                        event_type: 1
                                                    }
                                                })
                                            }}>Không cần điểm danh</div>
                                    </div>
                                 </div>   
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleOnUpdate}>Hoàn tất</Button>
                        <Button color="danger" onClick={this.handleDeleteEvent}>Xóa sự kiện</Button>
                        <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
