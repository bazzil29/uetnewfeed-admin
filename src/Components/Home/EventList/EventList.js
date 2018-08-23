import React from 'react';
import Event from "./Event/Event";
import EventDetails from "./EventDetails/EventDetails";
import { Button, PaginationItem, PaginationLink, Pagination } from "reactstrap";
import './EventList.css'
import AddEvent from "./AddEvent/AddEvent";
import {
    getListEvent,
    getEventDetails,
    getPageNumbers
} from '../../../Services/APIServices';
import Waypoint from '../../../../node_modules/react-waypoint';
import './EventDetails/EventDetails.css';
import ReactLoading from 'react-loading';

export default class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isOpenAdd: false,
            eventDetail: {},
            listEvent: [],
            isLoading: false,
            page: 0,
            data: {},
            pageNumbers: 0,
        }
    };

    /** 
    *
    * 
    * 
    * -----------------------------------------------------------------------------------------------------------------------------------------------
    * 
    *
    *  
    * */

    componentDidMount() {
        this.loadMoreItems();
        getPageNumbers()
            .then(res => {
                this.setState({
                    ...this.state,
                    pageNumbers: res.data
                })
            })
    };

    /** 
    *
    * 
    * 
    * -----------------------------------------------------------------------------------------------------------------------------------------------
    * 
            *  
    * */

    handleOpenEventDetails = (id) => {
        this.loadEventDetails(id)
            .then(() => {
                this.setState({
                    isOpen: !this.state.isOpen,
                });
            })
    };

    handleUpdateEvent = (t) => {
        this.loadMoreItems();
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };


    /** 
    *
    * 
    * 
    * -----------------------------------------------------------------------------------------------------------------------------------------------
    * 
    *
    *  
    * */

    loadMoreItems = () => {
        getListEvent(this.state.page)
            .then((res) => {
                if (res.data.success && res.data.data !== null) {
                    this.setState({
                        ...this.state,
                        isLoading: true
                    });
                    const self = this;
                    setTimeout(function () {
                        // add data
                        self.setState({
                            ...self.state,
                            listEvent: res.data.data,
                            isLoading: false
                        })
                    }, 1000);
                }
                else {
                    this.setState({
                        ...this.state,
                        isLoading: true
                    });
                }
            })
        // fake an async. ajax call with setTimeout
    };

    loadEventDetails = async (id) => {
        await getEventDetails(id)
            .then((res) => {
                if (res.success) {
                    this.state.data = res.data;
                    this.setState(this.state);
                    this.setState({
                        ...this.state,
                        data:{
                            ...res.data,
                            interested:res.interested
                        }
                    })
                }
            })
    };

    /** 
        *
        * 
        * 
        * -----------------------------------------------------------------------------------------------------------------------------------------------
        * 
        *
        *  
        * */

    renderEvent = () => {
        const listEvent = this.state.listEvent.map((e, index) => {
            return <Event toggle={this.handleOpenEventDetails} data={e} key={index} />;
        })
        return listEvent;
    };

    renderWaypoint = () => {
        if (!this.state.isLoading) {
            return (
                <Waypoint onEnter={this.loadMoreItems}
                />
            );
        }
    };

    renderPanigation = () => {
        const tmp = this.state.pageNumbers;
        var a = [];
        for (let i = 0; i < tmp; i++) {
            a.push(i);
        }
        return a.map((e, index) => {
            if (index === this.state.page) {
                return (
                    <PaginationItem active key={index} index={index}>
                        <PaginationLink >
                            {e + 1}
                        </PaginationLink>
                    </PaginationItem>
                )
            }
            return (
                <PaginationItem key={index} index={index} onClick={
                    (e) => {
                        this.setState({
                            ...this.state,
                            page: index
                        })
                        this.loadMoreItems();
                    }
                }>
                    <PaginationLink >
                        {e + 1}
                    </PaginationLink>
                </PaginationItem>
            )
        })
    }

    /** 
    *
    * 
    * 
    * -----------------------------------------------------------------------------------------------------------------------------------------------
    * 
    *
    *  
    * */

    render() {
        const eventDetails = (this.state.isOpen) ? <EventDetails
            modal={this.state.isOpen}
            open={this.toggle}
            updateEvent={this.handleUpdateEvent}
            toggle={() => {
                this.setState({
                    isOpen: !this.state.isOpen,
                });
            }}
            data={this.state.data}
        /> : null;
        return (
            <div className="animated fadeIn">
                <div className="card">
                    <Button color={"primary"} id={'btn-pill'}
                        onClick={() => {
                            this.setState({
                                ...this.state,
                                isOpenAdd: !this.state.isOpenAdd
                            })
                        }}>
                        Thêm sự kiện
                    </Button>
                </div>
                <AddEvent modal={this.state.isOpenAdd} toggle={() => {
                    this.setState({
                        ...this.state,
                        isOpenAdd: !this.state.isOpenAdd
                    })
                }} toggleAdd={this.loadMoreItems} />
                {
                    (this.state.isLoading) ? <ReactLoading type="bars" color="#20a8d8" height='5%' width='5%' /> : this.renderEvent()
                }
                {eventDetails}
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    {this.renderPanigation()}
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
        )
    }
}
