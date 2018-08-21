import React from 'react';
import Event from "./Event/Event";
import EventDetails from "./EventDetails/EventDetails";
import { Button } from "reactstrap";
import './EventList.css'
import AddEvent from "./AddEvent/AddEvent";
import { getListEvent, getEventDetails } from '../../../Services/APIServices';
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
            data:{},
        }
    };   

    /*------------------------------------------------------------------------------------------ */

    componentDidMount(){
        this.loadMoreItems();
    };

    /*------------------------------------------------------------------------------------------ */

    toggle =  (id) => {
        this.loadEventDetails(id)
         .then(()=>{
            this.setState({
                isOpen: !this.state.isOpen,
            });
         })   
    };

    endToggle = (t) =>{
        this.state.listEvent.forEach((e,index)=>{
            if(e.id===t.id){
                e = t;
                this.setState(this.state);
            }
        })
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    toggleAddEvent = (e) => {
        this.state.listEvent.unshift(e);
    };


    toggleAddBox = () =>{
        this.setState({
            isOpenAdd: !this.state.isOpenAdd,
        })
    };

    handleDeleteEvent = (id) =>{
        var tmp;
        this.state.listEvent.forEach((e,index)=>{
            if(e.id === id){
                tmp = index;
            }
        })
        console.log(tmp);
       this.state.listEvent.splice(tmp,1);
        this.setState({
            isOpen: !this.state.isOpen,
        });
        this.setState(this.state);
    };

    /*------------------------------------------------------------------------------------------ */

    loadMoreItems = async ()=> {
        var eventsToAdd;
        await getListEvent(this.state.page)
            .then((res)=>{
                eventsToAdd = res.data.data;
                console.log(res);
            })
        // fake an async. ajax call with setTimeout
        const self = this;
        setTimeout(function () {
            // add data
            
            var currentItems = self.state.listEvent;
            for(var i  = 0 ; i <eventsToAdd.length; i++){
                currentItems.push(eventsToAdd[i]);
            }
            self.state.isLoading = false;
            self.state.listEvent = currentItems;
            self.setState(self.state);
        }, 2000);   
    };

    loadEventDetails = async (id) =>{
        await getEventDetails(id)
             .then((res)=>{
                console.log(res);
                 if(res.success){
                    this.state.data = res.data;
                     this.setState(this.state);
                 }
         })
    };

    /*------------------------------------------------------------------------------------------ */

    
    renderEvent = () => {
        const listEvent = this.state.listEvent.map((e, index) => {
            return <Event toggle={this.toggle} data = {e}  key={index}  />;
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

    /*------------------------------------------------------------------------------------------ */
        render() {
        const tmp = (this.state.isOpen)?<EventDetails 
                                            modal={this.state.isOpen} 
                                            deleteEvent={this.handleDeleteEvent} 
                                            open={this.toggle}  
                                            toggle={this.endToggle}  
                                            data={this.state.data} 
                                            />:null;
        return (
            <div className="animated fadeIn"> 
                <div className="card">
                    <Button color={"primary"} id={'btn-pill'} 
                            onClick={this.toggleAddBox}>
                            Thêm sự kiện
                    </Button>
                </div>
                <AddEvent modal={this.state.isOpenAdd} toggle={this.toggleAddBox} toggleAdd={this.toggleAddEvent} />
                {this.renderEvent()}
               {tmp} 
            </div>
        )
    }
}
