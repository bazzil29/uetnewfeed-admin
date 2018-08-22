import React  from 'react';
import Student from "./Student/Student";
import StudentDetails from "./StudentDetails/StudentDetails";
import { Card, CardHeader, Col, Row, Button } from 'reactstrap';
import { getCourse, getMajor, getStudentByClassName, getStudentDetail } from "../../../Services/APIServices"
import AddStudent from './AddStudent';
import './StudentDetails/StudentDetails.css';

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
        }
    };

    /*---------------------------------------------------------------------- */
    componentDidMount() {
        getCourse()
            .then((res) => {
                console.log(res.data);
                if (res.success) {
                    this.setState({
                        courses:res.data
                    });
                }
            })
    };


    chooseCourse = (t, id_course) => {
        
        getMajor(id_course)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    majors:res.data
                });
            })
    };

    chooseMajor = (id) => {
        console.log(id);
        this.setState({
            ...this.state,
            classId: id
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
    toggleShowList = () => {
        console.log(this.state.classId)
        getStudentByClassName(this.state.classId)
            .then((res) => {
                if(res.success){
                    console.log(res)
                this.setState({
                    students: res.data,
                    isShowList: true
                })
                }
            })
    };

    toggleStudentDetails = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    getStudentToggle = async (id) => {
        await getStudentDetail(id)
            .then(res => {
                this.setState({
                    studentDetail: res.data
                })
            })
        console.log(this.state.studentDetail)
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
                toggle={()=>{
                        this.toggleStudentDetails();
                        this.toggleShowList();
                        }}
                modal={this.state.isOpen}
                data={this.state.studentDetail}
                onUpdate={this.handleUpdateStudent}
            />) : null
        return (
            <div>
                <AddStudent toggle={this.toggleAddStudent} modal={this.state.isOpenAddStudent} reRender={this.toggleShowList}/>
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
                            <span>     </span>
                            <button type="button" className="btn btn-danger " onClick={this.toggleShowList}>
                                Xem danh sách
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
                        {students}
                    </Card>
                </div>
            </div>
        )
    }
}
