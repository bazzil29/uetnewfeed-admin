import React, { Component } from 'react';
import './NotificationList.css'
import Notification from "./Notification/Notification";
import {Button} from 'reactstrap';
import NotificationDetails from "./NotificationDetails/NotificationDetails";
import AddNotification from "./AddNotification/AddNotification";
export default class NotificationList extends React.Component{
    state = {
        isOpen: false,
        isOpenAdd:false,
    };
/*----------------------------------------------------------------------------------------------- */
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    };
    toggleAdd=()=>{
        this.setState({
            isOpen: this.state.isOpen,
            isOpenAdd: !this.state.isOpenAdd,
        })
    };
/*----------------------------------------------------------------------------------------------- */

    render(){
        return(
            <div>
                <AddNotification modal={this.state.isOpenAdd} toggle={this.toggleAdd}/>
                <NotificationDetails modal={this.state.isOpen} toggle={this.toggle}/>
                <div className="card">
                    <Button color={"primary"}  id={'btn-pill'} onClick={this.toggleAdd}>Thêm thông báo</Button>
                </div>
                <div className="animated fadeIn">
                </div>
            </div>
        )
    }
}