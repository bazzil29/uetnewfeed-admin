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
import {
    updateEvent,
    deleteEvent,
    getURLImg,
    getCourse,
    getMajor,
    getStudentByClassName,
    addStudentToEvent,
    getStudentEvent,
    deleteStudentFromEvent,
    importStudentsToEvent
} from '../../../../Services/APIServices';
export default class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                header: this.props.data.header,
                id: this.props.data.id,
                content: this.props.data.content,
                organization: 'UET-COM-RANG-TEAM',
                image: this.props.data.image,
                place: this.props.data.place,
                time_start: this.props.data.time_start,
                introduce: this.props.data.introduce,
                event_type: this.props.data.event_type,
                link_register: this.props.data.link_register,
                interested: this.props.data.interested
            },
            courses: [],
            majors: [],
            date: new Date(),
            collapse: false,
            students: [],
            studentsForce: [],
            isStudentsOpen: false,
            isUpdated: false,
            studentToAdd: [],
            studentRemove: []
        };
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            date: new Date(this.state.info.time_start)
        });

        getCourse()
            .then((res) => {
                if (res.success) {
                    this.setState({
                        courses: res.data
                    });
                }
            })

        getStudentEvent(this.state.info.id)
            .then(res => {
                if (res.success) {
                    this.setState({
                        ...this.state,
                        studentsForce: res.data
                    })
                }
            })

    }

    /*------------------------------------------------------------------------------------------------------------ */
    handleTimeChange = (date) => {
        this.setState({ ...this.state, date: date })
        this.setState({
            ...this.state,
            date: date,
            info: {
                ...this.state.info,
                time_start: date.toISOString(),
            }
        })
    };

    handleNameChange = (value) => {
        this.setState({
            info: {
                ...this.state.info,
                header: value
            }
        });
    };

    handleIntroduceChange = (value) => {
        this.setState({
            info: {
                ...this.state.info,
                introduce: value
            }
        });
    };

    handleContentChange = (value) => {
        this.setState({
            info: {
                ...this.state.info,
                content: value
            }
        });
    }

    handleOrganzationChange = (value) => {
        this.setState({
            info: {
                ...this.state.info,
                organization: value
            }
        });
    }

    handlePhoneChange = (value) => {
        this.setState({
            info: {
                ...this.state.info,
                phone: value
            }
        });
    }

    handleEmailChange = (value) => {
        this.setState({
            info: {
                ...this.state.info,
                email: value
            }
        });
    }

    handleImageChange = (value) => {
        this.setState({
            info: {
                ...this.state.info,
                image: value
            }
        });
    };

    handlePlaceChange = (value) => {
        this.setState({
            info: {
                ...this.state.info,
                place: value
            }
        });
    };

    handleChangeFormCheckin = (value) => {
        this.setState({
            ...this.state,
            info: {
                ...this.state.info,
                link_register: value
            }
        })
    }
    /*------------------------------------------------------------------------------------------------------------ */





    /*------------------------------------------------------------------------------------------------------------ */

    handleOnUpdate = async () => {
        const id = this.props.data.id;
        //console.log(this.state.info);
        const file = this.refs.eventStudents.files[0];
        await this.state.studentToAdd.forEach((e, index) => {
            addStudentToEvent(e.mssv, id);
        });

        await this.state.studentRemove.forEach(e => {
            deleteStudentFromEvent(e.id_stu, id);
        });

        await importStudentsToEvent(file, id)
            .then(res => {

                if (!res.success) {
                    alert(res.reason);
                }
            })

        await updateEvent(id, this.state.info)
            .then((res) => {
                if (res.success) {
                    this.props.updateEvent();
                }
                else {
                    alert(res.reason);
                }
            });
    };

    handleDeleteEvent = async () => {
        const id = this.state.info.id;
        await deleteEvent(id)
            .then((res) => {
                this.props.updateEvent();
            });
    };

    /*------------------------------------------------------------------------------------------------------------ */
    //Phần xử lý thêm xinh viên

    onAddStudentEvent = (e) => {
        this.setState({
            ...this.state,
            collapse: false
        })
    };

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    };

    chooseCourse = (t, id_course) => {

        getMajor(id_course)
            .then((res) => {
                this.setState({
                    ...this.state,
                    majors: res.data
                });
            })
    };
    choseOption = (e, className) => {
        const tmp = document.getElementsByClassName(className)[0];
        tmp.innerText = e.target.innerText;
    };

    chooseMajor = (id) => {
        this.setState({
            ...this.state,
            classId: id
        })
    };

    toggleShowList = () => {
        getStudentByClassName(this.state.classId)
            .then((res) => {
                if (res.success) {
                    this.setState({
                        ...this.state,
                        students: res.data,
                        isShowList: true
                    })
                }
            })
    };

    renderSearchBar = () => {
        return (
            <div>
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-info dropdown-toggle source-option"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Khóa
                                </button>
                    <div className="dropdown-menu">
                        {
                            this.renderCourse()
                        }
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item input-group" href="#">
                            <input type="text" className="form-control source" />
                            <Button
                                className="input-group-text"
                                onClick={this.addSource}>
                                Thêm
                                        </Button>
                        </div>
                    </div>
                </div>
                <span>     </span>
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-danger dropdown-toggle major-option"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Lớp
                                </button>
                    <div className="dropdown-menu">
                        {
                            this.renderMajor()
                        }
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item input-group" href="#">
                            <input type="text" className="form-control major" />
                            <Button
                                className="input-group-text"
                                onClick={this.addMajor}>
                                Thêm
                                        </Button>
                        </div>
                    </div>
                </div>
                <span>     </span>
                <button type="button" className="btn btn-danger " onClick={this.toggleShowList}>
                    Xem danh sách
                            </button>
            </div>
        )
    };

    renderStudentsForce = () => {
        const tmp = this.state.studentsForce.map((e, index) => {
            return <ListGroupItem key={index} className="justify-content-between">
                <Row>
                    <Col lg={'1'} md={'1'} sm={'1'} xs={'1'}>{index + 1}</Col>
                    <Col lg={'6'} md={'6'} sm={'6'} xs={'6'}>{e.account.full_name}</Col>
                    <Col lg={'4'} md={'4'} sm={'4'} xs={'4'}>{e.mssv}</Col>
                    <Col lg={'1'} md={'1'} sm={'1'} xs={'1'}>
                        <i
                            className="fas fa-minus-circle"
                            id={"student-icon"}
                            onClick={() => {
                                this.state.studentRemove.push(e);
                                const tmp = this.state.studentsForce.indexOf(e);
                                this.state.studentsForce.splice(tmp, 1);
                                this.setState(this.state);
                            }}
                        />
                    </Col>
                </Row>
            </ListGroupItem>
        })
        return tmp;
    };

    renderStudents = () => {
        const tmp = this.state.students;
        return tmp.map((x, index) => {
            return <CardHeader key={index}>
                <Row >
                    <Col lg={'1'} md={'1'} sm={'1'} xs={'1'}>{index + 1}</Col>
                    <Col lg={'6'} md={'6'} sm={'6'} xs={'6'}>{x.full_name}</Col>
                    <Col lg={'3'} md={'3'} sm={'3'} xs={'3'}>{x.mssv}</Col>
                    <Col lg={'2'} md={'2'} sm={'2'} xs={'2'}>
                        <div className="checkbox checkbox-primary">
                            <input id="checkbox" type="checkbox" onClick={(e) => {
                                if (e.target.checked) {
                                    this.state.studentToAdd.push(x);
                                    this.setState(this.state);
                                }
                                else {
                                    const tmp = this.state.studentToAdd;
                                    const index = tmp.indexOf(x);
                                    tmp.splice(index, 1);
                                    this.setState(this.state);
                                }
                            }} />
                        </div>
                    </Col>
                </Row>
            </CardHeader>
        })
    };

    renderCourse = () => {
        return this.state.courses.map((e, index) => {
            return <div className="dropdown-item" key={index} onClick={(t) => {
                this.choseOption(t, "source-option");
                this.chooseCourse(t, e.id);
            }}>{e.name}</div>
        })
    };

    renderMajor = () => {
        return this.state.majors.map((e, index) => {
            return <div className="dropdown-item" key={index} onClick={(t) => {
                this.choseOption(t, "major-option");
                this.chooseMajor(e.id)
            }}>{e.name}</div>
        })
    };



    /*------------------------------------------------------------------------------------------------------------ */

    renderEventType = () => {
        const type = this.state.info.event_type;
        if (type === 1) {
            return "Không cần điểm danh";
        }
        else if (type === 0) {
            return "Cần điểm danh";
        }
    };

    renderLinkFormCheckin = () => {
        const type = this.state.info.event_type;
        if (type === 1) {
            return null;
        }
        else if (type === 0) {
            return <div>
                <Label>Link đăng ký:</Label>
                <input
                    className="form-control"
                    type="text"
                    defaultValue={this.state.info.link_register}
                    onClick={e => {
                        this.handleChangeFormCheckin(e.target.value)
                    }}
                />
            </div>
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
            place,
            phone,
            email,
            introduce,
        } = this.state.info;
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Chỉnh sửa thông tin sự kiện</ModalHeader>
                    <ModalBody>
                        <Label>Tiêu đề sự kiện:</Label>
                        <input className="form-control" type="text" defaultValue={header} onChange={e => {
                            this.handleNameChange(e.target.value);
                        }} />
                        <Label>Mã sự kiện:</Label>
                        <input className="form-control" type="text" placeholder={id} disabled />
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
                        <input className="form-control" type="text" defaultValue={place} onChange={e => {
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
                        <input className="form-control" type="text" defaultValue={organization} onChange={e => {
                            this.handleOrganzationChange(e.target.value);
                        }} />
                        <Label>Số điện thoại:</Label>
                        <input className="form-control" type="text" defaultValue={phone} onChange={e => {
                            this.handlePhoneChange(e.target.value);
                        }} />
                        <Label>E-mail:</Label>
                        <input className="form-control" type="text" defaultValue={email} onChange={e => {
                            this.handleEmailChange(e.target.value);
                        }} />
                        <Label>Ảnh bìa đính kèm:</Label>
                        <Input type="file" onChange={(e) => {
                            getURLImg(e.target.files[0])
                                .then((res => {
                                    if (res.success) {
                                        this.setState({
                                            ...this.state,
                                            info: {
                                                ...this.state.info,
                                                image: res.url
                                            }
                                        })
                                    }
                                    else {
                                        alert(res.result)
                                    }
                                }))
                        }} />
                        <Label>Sinh viên quan tâm:</Label>
                        <input className="form-control" value={this.state.info.interested} type="number" disabled />
                        <Label>Sinh viên mặc định tham gia:</Label>
                        <ListGroup>
                            {this.renderStudentsForce()}
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
                                        {this.renderSearchBar()}
                                        {this.renderStudents()}
                                        {students}
                                        <Row>
                                            <Col>
                                                <Button className="add-student-event" onClick={this.onAddStudentEvent}>
                                                    Đóng
                                                        </Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </ListGroup>
                        <Label>Thêm sinh viên đăng ký tham gia (upload file xlxs):</Label>
                        <input type='file' className="form-control" ref="eventStudents" />
                        <Label>Loại sự kiện:</Label>
                        <br />
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
                                <div className="dropdown-item" onClick={() => {
                                    this.setState({
                                        info: {
                                            ...this.state.info,
                                            event_type: 0
                                        }
                                    })
                                }}>Cần điểm danh</div>
                                <div className="dropdown-item" onClick={() => {
                                    this.setState({
                                        info: {
                                            ...this.state.info,
                                            event_type: 1
                                        }
                                    })
                                }}>Không cần điểm danh</div>
                            </div>
                        </div>
                        {
                            this.renderLinkFormCheckin()
                        }
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
