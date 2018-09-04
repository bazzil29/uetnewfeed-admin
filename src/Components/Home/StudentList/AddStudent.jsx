import React  from 'react';
import {
    ModalBody,
    ModalFooter,
    ModalHeader,
    Modal,
    Button,
    Form,
    FormGroup,
    Label
} from "reactstrap";
import { getCourse, getMajor, addStudent } from '../../../Services/APIServices';
export default class AddStudent extends React.Component {
    constructor(props){
        super(props);
        this.full_name = React.createRef();
        this.mssv  =  React.createRef();
    }
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
                    this.setState({
                        ...this.state,
                        courses: res.data
                    })
                }
                else(
                    alert(res.message)
                )
            })
    };

/*----------------------------------------------------------------------------------------------------------- */
    handleOnAdd = () =>{
        const data = {
            id_course: this.state.info.id_course,
            id_class: this.state.info.id_class,
            full_name:this.refs.full_name.value,
            mssv:this.refs.mssv.value
        };
        addStudent(data)
            .then(res=>{
                if(res.success){
                    this.props.toggle();
                    this.props.reRender();
                }
                else(
                    alert(res.message)
                )
            })
            
    }

/*----------------------------------------------------------------------------------------------------------- */
    chooseCourse = (e) => {
        getMajor(e.id)
            .then((res) => {
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
        this.setState({
            ...this.state,
            info:{
                ...this.state.info,
                class_name:e.name,
                id_class:e.id
            }
        });
    };

/*----------------------------------------------------------------------------------------------------------- */

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
                        <ModalHeader toggle={this.props.toggle}>Thêm sinh viên</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label>Họ và tên:</Label>
                                    <input 
                                        className = "form-control"
                                        ref="full_name"
                                        type = "text"
                                        placeholder={full_name}
                                    />
                                    <Label>Mã sinh viên:</Label>
                                    <input
                                    className = "form-control"
                                        ref = "mssv"
                                        type="number"
                                        placeholder={mssv}
                                    />
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