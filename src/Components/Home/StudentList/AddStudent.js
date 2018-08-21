import React  from 'react';
import {
    ModalBody,
    ModalFooter,
    ModalHeader,
    Modal,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { getCourse, getMajor } from '../../../Services/APIServices';
export default class AddStudent extends React.Component {
    state = {
        info: {
            full_name: "Họ và tên",
            mssv: "Mã sinh viên",
            phone_number: "",
            course: "Khóa",
            class_name: "Lớp",
            email: "Email",
            role_id: null,
            id_course: null,
            id_class: null,
            faculty: null,
        },
        courses: [],
        majors: []
    };

    componentDidMount() {
        getCourse()
            .then((res) => {
                if (res.success) {
                    console.log(res.data)
                    this.setState({
                        ...this.state,
                        courses: res.data
                    })
                }
            })
    };

    chooseCourse = (e) => {
        console.log(e);
        getMajor(e.id)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    majors: res.data,
                    info:{
                        ...this.state.info,
                        course:e.name,
                        id_course:e.id
                    }
                });
            })
    };

    chooseMajor = (e) => {
        console.log(e.id);
        this.setState({
            ...this.state,
            info:{
                ...this.state.info,
                class_name:e.name,
                id_class:e.id
            }
        });
    };

    renderPosition = () => {
        const position = this.state.info.role_id;
        if (position === 2) {
            return "Sinh viên";
        }
        else if (position === 3) {
            return "Cộng tác viên";
        }
        return "Admin";
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
    render(){
            const {
                full_name, mssv,  course, class_name
            } = this.state.info;
            return (
                <div>
                    <Modal isOpen={this.props.modal} toggle={this.props.toggle} >
                        <ModalHeader toggle={this.props.toggle}>Chỉnh sửa thông tin sinh viên</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label>Họ và tên:</Label>
                                    <Input
                                        placeholder={full_name}
                                    />
                                    <Label>Mã sinh viên:</Label>
                                    <Input
                                        type="number"
                                        placeholder={mssv}
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
                                                        role_id: 1
                                                    }
                                                })
                                            }>Admin</div>
                                        </div>
                                    </div>
                                    <br />
                                    <Label>Khóa:</Label>
                                        <br/>
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
                                    <br/>
                                    <Label>Lớp:</Label>
                                    <br/>
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
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleOnAdd}>Thêm sinh viên</Button>
                            <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            )
    }
}