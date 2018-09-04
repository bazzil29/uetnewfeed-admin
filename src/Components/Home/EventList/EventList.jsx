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
        getPageNumbers()
            .then(res => {
                this.setState({
                    ...this.state,
                    pageNumbers: res.data
                })
            });
        this.loadMoreItems(this.state.page);
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
        this.loadMoreItems(this.state.page);
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

    loadMoreItems = (index) => {
        this.setState({
            ...this.state,
            page:index
        })
        getListEvent(index)
            .then((res) => {
                if (res.data.success && res.data.data !== null) {
                    this.setState({
                        ...this.state,
                        listEvent: res.data.data,
                        isLoading: true,
                    });
                    const self = this;
                    setTimeout(function () {
                        self.setState({
                            ...self.state,
                            isLoading: false
                        })
                    }, 500);
                }
                else {
                    this.setState({
                        ...this.state,
                        isLoading: true
                    });
                }
            })
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
                        this.loadMoreItems(index);
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
                    </PaginationItem>
                    {this.renderPanigation()}
                    <PaginationItem>
                    </PaginationItem>
                </Pagination>
            </div>
        )
    }
}
