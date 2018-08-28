import React from 'react';
import Student from "./Student/Student";
import StudentDetails from "./StudentDetails/StudentDetails";
import {
    Card,
    CardHeader,
    Col,
    Row,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Label
} from 'reactstrap';
import {
    getCourse,
    getMajor,
    getStudentByClassName,
    getStudentDetail,
    resetPassword,
    importStudentsData
} from '../../../Services/APIServices';
import AddStudent from './AddStudent';
import './StudentDetails/StudentDetails.css';
import './StudentList.css';
import ReactLoading from "react-loading";

export default class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isOpenAddStudent: false,
            isShowList: false,
            students: [],
            falcutys: [],
            majors: [],
            courses: [],
            studentDetail: {},
            idClassChoose: null,
            isOpenReset: false,
            isOpenImport: false,
            isLoading:false
        }
    };

    /*---------------------------------------------------------------------- */
    componentDidMount() {
        getCourse()
            .then((res) => {
                if (res.success) {
                    this.setState({
                        courses: res.data
                    });
                }
            })
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

    chooseMajor = (id) => {
        this.setState({
            ...this.state,
            classId: id,
            isLoading:true
        })
        
        getStudentByClassName(id)
            .then((res) => {
                if (res.success) {
                    this.setState({
                        ...this.state,
                        students: res.data,
                        isShowList: true,
                        isLoading:false
                    })
                }
            })
    };

    addMajor = () => {
        const tmp = document.getElementsByClassName("major")[0].value;
        this.setState({
            majors: this.state.majors.push(tmp)
        })
    };


    choseOption = (e, className) => {
        const tmp = document.getElementsByClassName(className)[0];
        tmp.innerText = e.target.innerText;
    };

    /*---------------------------------------------------------------------- */
    toggleReset = () => {
        this.setState({
            ...this.state,
            isOpenReset: !this.state.isOpenReset
        })
    }


    // toggleShowList = () => {
    //     getStudentByClassName(this.state.classId)
    //         .then((res) => {
    //             if (res.success) {
    //                 this.setState({
    //                     ...this.state,
    //                     students: res.data,
    //                     isShowList: true
    //                 })
    //             }
    //         })
    // };

    toggleStudentDetails = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    toggleImport = () => {
        this.setState({
            ...this.state,
            isOpenImport: !this.state.isOpenImport
        })
    }

    getStudentToggle = async (id) => {
        await getStudentDetail(id)
            .then(res => {
                this.setState({
                    studentDetail: res.data
                })
            })
        this.toggleStudentDetails();
    };

    handleUpdateStudent = () => {
        this.toggleShowList();
    };

    toggleAddStudent = () => {
        this.setState({ isOpenAddStudent: !this.state.isOpenAddStudent });
    };

    handleAddStudent = () => {
        this.toggleAddStudent();
    };

    /*---------------------------------------------------------------------- */
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

    renderList = () => {
        return this.state.students.map((e, index) => {
            return <Student
                data={e}
                toggle={this.toggleStudentDetails}
                key={index}
                index={index}
                getStudentDetail={this.getStudentToggle}
            />;
        })
    };

    /*---------------------------------------------------------------------- */

    render() {
        const students = (this.state.isShowList) ? this.renderList() : null;
        const studentDetails = (this.state.isOpen) ?
            (<StudentDetails
                toggle={() => {
                    this.toggleStudentDetails();
                    this.toggleShowList();
                }}
                modal={this.state.isOpen}
                data={this.state.studentDetail}
                onUpdate={this.handleUpdateStudent}
            />) : null

        const loading  = (this.state.isLoading) ? 
                            <ReactLoading 
                                id="admin-loading" 
                                type="cylon" 
                            color="#1e9ecb" 
                            /> : null
        return (
            
            <div>
                 
                <Button
                    color="secondary"
                    className="btn-pill"
                    id="reset-button "
                    size="lg"
                    onClick={this.toggleReset}
                >Khôi phục mật khẩu</Button>
                {
                    //reset password for student
                }

                <Modal
                    isOpen={this.state.isOpenReset}
                    modalTransition={{ timeout: 700 }}
                    backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggleReset}
                >
                    <ModalHeader toggle={this.toggleReset}>Khôi phục mật khẩu cho sinh viên</ModalHeader>
                    <ModalBody>
                        <Label>
                            Nhập vào mã sinh viên
                        </Label>
                        <input type="number" className="form-control" ref="resetMssv" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => {
                            this.toggleReset();
                            const mssv = this.refs.resetMssv.value;
                            resetPassword(mssv)
                                .then(res => {
                                    if (res.success) {
                                        alert("Thành công!")
                                    }
                                })
                        }}>Khôi phục</Button>{' '}
                        <Button color="secondary" onClick={this.toggleReset}>Hủy</Button>
                    </ModalFooter>
                </Modal>
                {
                    //import data section
                }
                <Modal
                    isOpen={this.state.isOpenImport}
                    modalTransition={{ timeout: 700 }}
                    backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggleImport}
                >
                    <ModalHeader toggle={this.toggleImport}>Thêm dữ liệu sinh viên (Điền thông tin còn thiếu bên dưới)</ModalHeader>
                    <ModalBody>
                        <Label>
                            Khoá:
                        </Label>
                        <input type="number" className="form-control" ref="studentsCourse" />
                        <Label>
                            Khoa:
                        </Label>
                        <input type="text" className="form-control" ref="studentsFaculty" />
                        <Label>
                            Lớp:
                        </Label>
                        <input type="text" className="form-control" ref="studentsClass" />
                        <Label>
                            Gói tin bảng tính (gồm 2 trường: name và mssv ):
                        </Label>
                        <input type="file" className="form-control" ref="studentsFile" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => {
                            // console.log(this.refs.studentsFile.files[0]);
                            const _faculty = this.refs.studentsFaculty.value;
                            const _class = this.refs.studentsClass.value;
                            const _course = this.refs.studentsCourse.value;
                            const _file = this.refs.studentsFile.files[0];
                            //console.log(_faculty,_class,_course)
                            importStudentsData(_file, _course, _class, _faculty)
                                .then((res) => {
                                    console.log(res)
                                    if (res.success) {
                                        this.toggleImport();
                                    }
                                    else {
                                        alert(res.reason)
                                    }
                                })

                        }}>Xong</Button>
                        <Button color="secondary" onClick={this.toggleImport}>Hủy</Button>
                    </ModalFooter>
                </Modal>


                <AddStudent
                    toggle={this.toggleAddStudent}
                    modal={this.state.isOpenAddStudent}
                    reRender={this.toggleShowList}
                />
                {studentDetails}
                <div className="animated fadeIn">
                    <Card>
                        <CardHeader>
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
                            <span>    </span>
                            {/* <button
                                type="`button"
                                className="btn btn-danger "
                                onClick={this.toggleShowList}
                            >
                                Xem danh sách
                                </button> */}
                            <span>     </span>
                            <button
                                type="button"
                                id="import-button"
                                className="btn btn-primary "
                                onClick={this.toggleImport}
                            >
                                <i className="fas fa-file-import" />
                                <span />   <span />
                                Chèn dữ liệu sinh viên
                                </button>

                        </CardHeader>
                    </Card>
                    <div className="card">
                        <button
                            color="primary"
                            className="btn btn-primary"
                            onClick={this.toggleAddStudent}
                        >
                            Thêm sinh viên
                        </button>
                    </div>
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col lg={'1'} md={'1'}>Stt</Col>
                                <Col lg={'4'} md={'4'}>Họ và tên</Col>
                                <Col lg={'2'} md={'2'}>Mã sinh viên</Col>
                                <Col lg={'2'} md={'2'}>Điểm rèn luyện</Col>
                            </Row>
                        </CardHeader>
                        {loading}
                        {students}
                        
                    </Card>
                </div>
            </div>
        )
    }
}
