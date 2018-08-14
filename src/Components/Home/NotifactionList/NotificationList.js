import React, { Component } from 'react';
import './NotificationList.css'
import { Button } from 'reactstrap';
import NotificationDetails from "./NotificationDetails/NotificationDetails";
import AddNotification from "./AddNotification/AddNotification";


export default class NotificationList extends React.Component {
    state = {
        isOpen: false,
        isOpenAdd: false,
    };
    /*----------------------------------------------------------------------------------------------- */
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    };
    toggleAdd = () => {
        this.setState({
            isOpen: this.state.isOpen,
            isOpenAdd: !this.state.isOpenAdd,
        })
    };
    /*----------------------------------------------------------------------------------------------- */

    render() {
        return (
            <div>
                <AddNotification modal={this.state.isOpenAdd} toggle={this.toggleAdd} />
                <NotificationDetails modal={this.state.isOpen} toggle={this.toggle} />
                <div className="card">
                    <button
                        color="primary"
                        className="btn btn-primary"
                        onClick={this.toggleAdd} >
                        Thêm thông báo
                    </button>
                </div>
                <div className="animated fadeIn">
                </div>
            </div>
        )
    }
}