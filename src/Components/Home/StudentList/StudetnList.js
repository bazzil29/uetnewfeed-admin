import React, { Component } from 'react';
import Student from "./Student/Student";
import StudentDetails from "./StudentDetails/StudentDetails";
import { Card, CardHeader, Col, Row, Button } from 'reactstrap';
import {getFalcuty,getCourse,getMajor} from "../../../Services/APIServices.js"

export default class StudentList extends React.Component {
    state = {
        isOpen: false,
        isShowList:false,
        students:[{
                    name:"Ngo Minh Phuong",
                    id:"16021629",
                    position:"admin",
                    point:100,
                 },
                 {
                    name:"Ngo Minh Phuong",
                    id:"16021629",
                    position:"CTV",
                    point:100,
                 },
                 {
                    name:"Ngo Minh Phuong",
                    id:"16021629",
                    position:"student",
                    point:100,
                 },
                 {
                    name:"Ngo Minh Phuong",
                    id:"16021629",
                    position:"admin",
                    point:100,
                 }],
        falcutys: [],
        majors: ["Lớp 1", "Lớp 2", "Lớp 3"],
        sources: []
    }
componentDidMount () {
    getFalcuty()
            .then((res)=>{
                console.log(res.data);
                this.state.falcutys = res.data; 
                this.setState(this.state);
            })
}
    
/*---------------------------------------------------------------------- */
    addFalcuty = (e) => {
        // const tmp = document.getElementsByClassName("falcuty")[0].value;
        // this.state.falcutys.push(tmp);
          
        getCourse(e.target.innerText)
            .then((res)=>{
                this.state.sources = res.data;
                console.log(res);
                this.setState(this.state);
            })
        //this.setState(this.state);
        
    }

    addSource = (e) => {
        // const tmp = document.getElementsByClassName("source")[0].value;
        // this.state.sources.push(tmp);
        const tmp = document.getElementsByClassName("falcuty")[0].value;
        console.log(e.target.innerText);  
        getMajor(tmp,e.target.innerText)
        .then((res)=>{
            this.state.majors = res.data;
            console.log(res);
            //this.setState(this.state);
        })
    }
    addMajor = () => {
        const tmp = document.getElementsByClassName("major")[0].value;
        this.state.majors.push(tmp);
        this.setState(this.state);
    }
/*---------------------------------------------------------------------- */

    renderSource = () => {
        return this.state.sources.map((e, index) => {
            return <div className="dropdown-item" key={index} onClick={(e)=>{
                this.choseOption(e , "source-option");
                this.addSource(e);
                }}>{e.course}</div>
        })
    }
    renderMajor = () => {
        return this.state.majors.map((e, index) => {
            return <div className="dropdown-item" key={index} onClick={(e)=>{
                this.choseOption(e , "major-option");
                }}>{e}</div>
        })
    }
    renderFalcuty = () => {
        return this.state.falcutys.map((e, index) => {
            return <div className="dropdown-item" key={index} onClick={(e)=>{
                this.choseOption(e,"falcuty-option");    
                this.addFalcuty(e);
            }}>{e.major}</div>
        })
    }

    renderList = () =>{
        return this.state.students.map((e,index)=>{
            return  <Student data={e} toggle={this.toggle} key={index} index ={index}/>;

        })
    }
/*---------------------------------------------------------------------- */

    choseOption = (e,className) =>{
        const tmp = document.getElementsByClassName(className)[0];
        tmp.innerText = e.target.innerText;
        //tmp.innerHTML = e.target.innerHTML; 
    }
/*---------------------------------------------------------------------- */
toggleShowList = () =>{
    this.setState({
        isShowList:true 
    })
}
toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen,
    })
}
/*---------------------------------------------------------------------- */

    render() {
        const students = (this.state.isShowList)?this.renderList():null;
        return (
            <div>
                <StudentDetails toggle={this.toggle} modal={this.state.isOpen} />

                <div className="animated fadeIn">
                    <Card>
                        <CardHeader>
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary dropdown-toggle falcuty-option" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Khoa
                                </button>
                                <div className="dropdown-menu">
                                    {
                                        this.renderFalcuty()
                                    }
                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-item input-group" href="#">
                                        <input type="text" className="form-control falcuty" />
                                        <Button className="input-group-text" onClick={this.addFalcuty}>Thêm</Button>
                                    </div>
                                </div>
                            </div>
                            <span>     </span>
                            <div className="btn-group">
                                <button type="button" className="btn btn-info dropdown-toggle source-option" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Khóa
                                </button>
                                <div className="dropdown-menu">
                                    {
                                        this.renderSource()
                                    }
                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-item input-group" href="#">
                                        <input type="text" className="form-control source" />
                                        <Button className="input-group-text" onClick={this.addSource}>Thêm</Button>
                                    </div>
                                </div>
                            </div>
                            <span>     </span>
                            <div className="btn-group">
                                <button type="button" className="btn btn-danger dropdown-toggle major-option" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Lớp
                                </button>
                                <div className="dropdown-menu">
                                    {
                                        this.renderMajor()
                                    }
                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-item input-group" href="#">
                                        <input type="text" className="form-control major" />
                                        <Button className="input-group-text" onClick={this.addMajor}>Thêm</Button>
                                    </div>
                                </div>
                            </div>
                            <span>     </span>
                            <button type="button" className="btn btn-danger " onClick={this.toggleShowList}>
                                    Xem Danh sách
                            </button>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>    
                            <Row>
                                <Col lg={'1'} md={'1'}>Stt</Col>
                                <Col lg={'4'} md={'4'}>Họ và tên</Col>
                                <Col lg={'2'} md={'2'}>Mã sinh viên</Col>
                                <Col lg={'1'} md={'1'}>Vai trò</Col>
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
