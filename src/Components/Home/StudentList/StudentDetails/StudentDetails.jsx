import React from 'react';
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
    ListGroup
} from "reactstrap";
import { updateStudent, getMajor, getCourse, deleteStudent, getEventsOfStudents, getFileEvents } from '../../../../Services/APIServices';

export default class StudentDetails extends React.Component {

    state = {
        info: {
            full_name: this.props.data.full_name,
            mssv: this.props.data.mssv,
            phone_number: this.props.data.phone_number,
            course: this.props.data.course,
            class_name: this.props.data.class,
            email: this.props.data.email,
            role_id: this.props.data.role_id,
            id_course: this.props.data.id_course,
            id_class: this.props.data.id_class,
            faculty: this.props.data.faculty,
            id: this.props.data.id
        },
        events: [],
        courses: [],
        majors: [],
        fileName:"",
    };

    /*-----------------------------------------------------------------------------------------------------------*/

    componentDidMount() {
        getCourse()
            .then((res) => {
                if (res.success) {
                    this.setState({
                        ...this.state,
                        courses: res.data
                    })
                }
            })
        getEventsOfStudents(this.props.data.mssv)
            .then(res => {
                if (res.success) {
                    console.log(res)
                    this.setState({
                        ...this.state,
                        events: res.data,
                        fileName:res.filename
                    })
                }
            })
    };


    componentWillReceiveProps(nextProps) {

    };

    /*-----------------------------------------------------------------------------------------------------------*/

    chooseCourse = (e) => {
        getMajor(e.id)
            .then((res) => {
                this.setState({
                    ...this.state,
                    majors: res.data,
                    info: {
                        ...this.state.info,
                        course: e.name,
                        id_course: e.id
                    }
                });
            })
    };

    chooseMajor = (e) => {
        this.setState({
            ...this.state,
            info: {
                ...this.state.info,
                class_name: e.name,
                id_class: e.id
            }
        });
    };


    /*-----------------------------------------------------------------------------------------------------------*/
    handleOnUpdate = () => {
        const info = this.state.info;
        const id = this.state.info.id;
        updateStudent(id, info)
            .then((res) => {
                if (res.success) {
                    this.props.onUpdate();
                    this.props.toggle();
                }
                else {
                    alert(res.reason);
                }
            })
    };

    handleGetFile = () =>{
        console.log(this.state.fileName)
        const tmp = this.state.fileName.split("/");
        getFileEvents(tmp[tmp.length-1])
    }
    /*-----------------------------------------------------------------------------------------------------------*/
    //onchange text field

    handleChangeName = (value) => {
        this.setState({
            ...this.state,
            info: {
                ...this.state.info,
                full_name: value
            }
        })
    };

    handleChangeId = (value) => {
        this.setState({
            ...this.state,
            info: {
                ...this.state.info,
                mssv: value
            }
        })
    };


    handleChangeEmail = (value) => {
        this.setState({
            ...this.state,
            info: {
                ...this.state.info,
                email: value
            }
        })
    };

    handleChangePhonenumber = (value) => {
        this.setState({
            ...this.state,
            info: {
                ...this.state.info,
                phone: value
            }
        })
    };



    /*-----------------------------------------------------------------------------------------------------------*/

    renderPosition = () => {
        const position = this.state.info.role_id;
        if (position === 2) {
            return "Sinh viên";
        }
        else if (position === 3) {
            return "Cộng tác viên";
        }
        else if (position === 4) {
            return "Admin";
        }

        return "Admin chính"

    };

    renderCourse = () => {
        return this.state.courses.map((e, index) => {
            return <div className="dropdown-item" key={index} onClick={(t) => {
                this.chooseCourse(e);
            }}>{e.name}</div>
        })
    };

    renderMajor = () => {
        return this.state.majors.map((e, index) => {
            return <div className="dropdown-item" key={index} onClick={(t) => {
                this.chooseMajor(e)
            }}>{e.name}</div>
        })
    };

    renderEvent = () => {
        return this.state.events.map((e, index) => {
            return <ListGroupItem
                key={index}
                className="justify-content-between"
            >
              {e.event.header}

            </ListGroupItem>
        })
    }

    /*-----------------------------------------------------------------------------------------------------------*/


    render() {
        const {
            full_name, mssv, phone_number, course, email, class_name, faculty, id
        } = this.state.info;
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} >
                    <ModalHeader
                        toggle={this.props.toggle}
                    >
                        Chỉnh sửa thông tin sinh viên
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Họ và tên:</Label>
                                <Input
                                    defaultValue={full_name}
                                    onChange={e => this.handleChangeName(e.target.value)} />
                                <Label>Mã sinh viên:</Label>
                                <Input
                                    type="number"
                                    defaultValue={mssv}
                                    onChange={
                                        e => this.handleChangeId(e.target.value)
                                    }
                                />
                                <Label>Vai trò:</Label>
                                <br />
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-info dropdown-toggle source-option"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        {this.renderPosition()}
                                    </button>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item" onClick={() =>
                                            this.setState({
                                                ...this.state,
                                                info: {
                                                    ...this.state.info,
                                                    role_id: 2
                                                }
                                            })
                                        }>Sinh viên</div>
                                        <div className="dropdown-item" onClick={() =>
                                            this.setState({
                                                ...this.state,
                                                info: {
                                                    ...this.state.info,
                                                    role_id: 3
                                                }
                                            })
                                        }>Cộng tác viên</div>
                                        <div className="dropdown-item" onClick={() =>
                                            this.setState({
                                                ...this.state,
                                                info: {
                                                    ...this.state.info,
                                                    role_id: 4
                                                }
                                            })
                                        }>Admin</div>
                                    </div>
                                </div>
                                <br />
                                <Label>Khóa:</Label>
                                <br />
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-info dropdown-toggle source-option"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        {
                                            course
                                        }
                                    </button>
                                    <div className="dropdown-menu">
                                        {
                                            this.renderCourse()
                                        }
                                    </div>
                                </div>
                                <br />
                                <Label>Lớp:</Label>
                                <br />
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-danger dropdown-toggle major-option"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        {
                                            class_name
                                        }
                                    </button>
                                    <div className="dropdown-menu">
                                        {
                                            this.renderMajor()
                                        }
                                    </div>
                                </div>
                                <br />
                                <Label>Khoa:</Label>
                                <Input type="text" value={faculty} disabled />
                                <Label>Ngày sinh:</Label>
                                <Input type="text" />
                                <Label>E-mail:</Label>
                                <Input type="email" defaultValue={email} onChange={
                                    e => this.handleChangeEmail(e.target.value)
                                } />
                                <Label>Số điện thoại:</Label>
                                <Input type="text"
                                    defaultValue={phone_number}
                                    onChange={
                                        e => this.handleChangePhonenumber(e.target.value)
                                    } />
                                <Label>Điểm rèn luyện:</Label>
                                <Input type="number" />
                                <Label>Danh sách sự kiện đã tham gia:</Label>
                                <ListGroup>
                                    {
                                        this.renderEvent()
                                    }
                                </ListGroup>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleOnUpdate}>Hoàn tất</Button>
                        <Button color="danger" onClick={() => {
                            deleteStudent(id)
                                .then(res => {
                                    if (res.success) {
                                        this.props.toggle();
                                    }
                                    else {
                                        alert(res.reason)
                                    }
                                })
                        }}>Xóa sinh viên</Button>
                        <Button color="warning" onClick={this.handleGetFile}>Export su kien da tham gia</Button>

                        <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
