import React from "react";
import Student from "./Student/Student";
import StudentDetails from "./StudentDetails/StudentDetails";

export default class StudentList extends React.Component {
    state={
        isOpen:false,
    }

    toggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen,
        })
    }

    render() {
        return (
            <div>
                <StudentDetails  toggle={this.toggle} modal={this.state.isOpen}/>
                <div className="animated fadeIn">
                    <Student toggle={this.toggle}/>
                    <Student toggle={this.toggle}/>
                    <Student toggle={this.toggle}/>
                    <Student toggle={this.toggle}/>
                    <Student toggle={this.toggle}/>
                    <Student toggle={this.toggle}/>
                </div>

            </div>

        )
    }
}
