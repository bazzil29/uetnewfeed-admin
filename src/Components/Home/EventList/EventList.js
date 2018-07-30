import React, { Component } from 'react';
import Event from "./Event/Event";
import EventDetails from "./EventDetails/EventDetails";
import {Button} from "reactstrap";
import './EventList.css'
import AddEvent from "./AddEvent/AddEvent";

export default class EventList extends React.Component {
    state = {
        isOpen: false,
        isOpenAdd:false,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    toggleAdd=()=>{
        this.setState({
            isOpen: this.state.isOpen,
            isOpenAdd: !this.state.isOpenAdd,
        })
    };

    render() {
        return (
            <div className="animated fadeIn">
                <div className="card">
                        <Button color={"primary"}  id={'btn-pill'} onClick={this.toggleAdd}>Thêm sự kiện</Button>
                </div>
                <AddEvent modal={this.state.isOpenAdd} toggle={this.toggleAdd}/>
                <EventDetails modal={this.state.isOpen} toggle={this.toggle}/>
                <Event toggle={this.toggle}/>
                <Event toggle={this.toggle}/>
                <Event toggle={this.toggle}/>
                <Event toggle={this.toggle}/>
            </div>
        )
    }
}
