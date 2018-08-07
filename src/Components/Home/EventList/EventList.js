import React, { Component } from 'react';
import Event from "./Event/Event";
import EventDetails from "./EventDetails/EventDetails";
import { Button } from "reactstrap";
import './EventList.css'
import AddEvent from "./AddEvent/AddEvent";
import { getListEvent } from '../../../Services/APIServices';
import Waypoint from '../../../../node_modules/react-waypoint';

export default class EventList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isOpenAdd: false,
            eventDetail: {},
            listEvent: [],
            isLoading: false,
            page:0,
        }
    }
    componentDidMount() {   
        getListEvent(0)
            .then(res => {
                this.state.listEvent = res.data.data;
                this.state.isLoading = false;
                this.setState(this.state);
            });
    }
    toggle = (id) => {
        this.setState({
            isOpen: !this.state.isOpen,
        });

    }
    toggleAdd = () => {
        this.setState({
            isOpen: this.state.isOpen,
            isOpenAdd: !this.state.isOpenAdd,
        })
    };

    renderEvent = () => {
        const listEvent = this.state.listEvent.map((e, index) => {
            return <Event toggle={this.toggle} data={e} key={index} />;
        })
        return listEvent;
    };

    renderWaypoint = () => {
        if (!this.state.isLoading) {
            return (
                <Waypoint   onEnter={this.loadMoreItems}
                />
            );
        }
    };
    loadMoreItems = async ()=> {
        var eventsToAdd;
        await getListEvent(this.state.page++)
            .then((res)=>{
                eventsToAdd = res.data.data;
                console.log(res.data.data)
            })
        this.state.isLoading = true;
        this.setState(this.state);
        // fake an async. ajax call with setTimeout
        const self = this;
        if(this.state.page<10)
        setTimeout(function () {
            // add data
            var currentItems = self.state.listEvent;
            for(var i  = 0 ; i <eventsToAdd.length; i++){
                console.log(eventsToAdd[i]);
                currentItems.push(eventsToAdd[i]);
            }
            self.state.isLoading = false;
            self.state.listEvent = currentItems;
            self.setState(self.state);
            console.log(self);
        }, 2000);   

    };

    render() {
        return (
            <div className="animated fadeIn">
                <div className="card">
                    <Button color={"primary"} id={'btn-pill'} onClick={this.toggleAdd}>Thêm sự kiện</Button>
                </div>
                <AddEvent modal={this.state.isOpenAdd} toggle={this.toggleAdd} />
                <EventDetails modal={this.state.isOpen} toggle={this.toggle} />
                {this.renderEvent()}
                <div className="infinite-scroll-example__waypoint"    >
                    {this.renderWaypoint()}
                    Loading more items…
                </div>
            </div>
        )
    }
}
