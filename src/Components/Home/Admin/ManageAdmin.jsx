import React from 'react';
import { Row, CardHeader, Card, Col, Badge, Button } from 'reactstrap';
import './ManageAdmin.css';
import { getUserByRoleId, updateAdmin, deleteStudent } from '../../../Services/APIServices';
import CreateAcount from './CreateAcount';
import ReactLoading from "react-loading";

export default class ManageAdmin extends React.Component {
    state = {
        admins: [],
        valunteers: [],
        modal: false,
        idLoading: true,
        superAdmin: {}
    }
    /*-------------------------------------------------------------------------------------------------- */
    componentDidMount() {
        this.loadingMode();
    }
    /**
     *
     *
     */

    getListAdmin = () => {
        getUserByRoleId(3)
            .then(res => {
                if (res.success) {
                    this.setState({
                        ...this.state,
                        valunteers: res.data
                    })
                }
            })

        getUserByRoleId(4)
            .then(res => {
                if (res.success) {
                    this.setState({
                        ...this.state,
                        admins: res.data
                    })
                }
            })

        getUserByRoleId(1)
            .then(res => {
                // console.log(res)
                if (res.success) {
                    this.setState({
                        ...this.state,
                        superAdmin: res.data[0]
                    })
                }
            })
    }

    loadingMode = () => {
        const self = this;
        setTimeout(() => {
            self.setState({
                ...self.state,
                isLoading: true
            })
        }, 1000)
        setTimeout(() => {
            self.setState({
                ...self.state,
                isLoading: false
            })
            self.getListAdmin();
        }, 2000)
    }

    toggleCreateAcount = () => {
        this.setState({
            ...this.state,
            modal: !this.state.modal
        })
    };

    renderAdmin = () => {
        const superAdmin = <CardHeader >
            <Row >
                <Col lg={'1'} md={'1'}>{1}</Col>
                <Col lg={'4'} md={'4'}>{this.state.superAdmin.full_name}</Col>
                <Col lg={'2'} md={'2'}>{this.state.superAdmin.phone_number}</Col>
                <Col lg={'2'} md={'2'}>
                    <Badge color="danger">
                        Siêu Admin
                </Badge>
                </Col>
                <Col lg={'1'} md={'1'}>
                </Col>
            </Row>
        </CardHeader>

        const tmp = this.state.admins.map((e, index) => {
            return (
                <CardHeader key={index} >
                    <Row >
                        <Col lg={'1'} md={'1'}>{index + 2}</Col>
                        <Col lg={'4'} md={'4'}>{e.full_name}</Col>
                        <Col lg={'2'} md={'2'}>{e.phone_number}</Col>
                        <Col lg={'2'} md={'2'}>
                            <Badge color="danger">
                                Admin
                            </Badge>
                        </Col>
                        <Col lg={'1'} md={'1'}>
                            <i className="fas fa-angle-double-down"
                                onClick={() => {
                                    updateAdmin(e.id, e, 3)
                                        .then(res => {
                                            if (res.success) {
                                                const self = this;
                                                setTimeout(() => {
                                                    self.setState({
                                                        ...self.state,
                                                        isLoading: true
                                                    })
                                                }, 1000)
                                                setTimeout(() => {
                                                    self.setState({
                                                        ...self.state,
                                                        isLoading: false
                                                    })
                                                    self.getListAdmin();
                                                }, 2000)
                                            }
                                            else {
                                                alert(res.reason);
                                            }
                                        })
                                }} />
                        </Col>
                        <Col lg={'1'} md={'1'}>
                        <i className="fas fa-user-times" onClick = {()=>{
                                deleteStudent(e.id)
                                    .then(res=>{
                                        if(res.success){
                                            const self = this;
                                            setTimeout(() => {
                                                self.setState({
                                                    ...self.state,
                                                    isLoading: true
                                                })
                                            }, 1000)
                                            setTimeout(() => {
                                                self.setState({
                                                    ...self.state,
                                                    isLoading: false
                                                })
                                                self.getListAdmin();
                                            }, 2000)
                                        }
                                        else{
                                            alert(res.message)
                                        }
                                    })
                            }} 
                        />
                        </Col>
                    </Row>
                </CardHeader>
            )
        })

        if (this.state.admins.length === 0) {
            return <Card color="primary">
                        {superAdmin}
                    </Card>
        }
        else {
            return (
                <Card color="primary">
                    {superAdmin}
                    {tmp}
                </Card>
            )
        }


    };


    renderValunteer = () => {

        const tmp = this.state.valunteers.map((e, index) => {
            return (
                <CardHeader key={index}>
                    <Row >
                        <Col lg={'1'} md={'1'}>{index + 1}</Col>
                        <Col lg={'4'} md={'4'}>{e.full_name}</Col>
                        <Col lg={'2'} md={'2'}>{e.phone_number}</Col>
                        <Col lg={'2'} md={'2'}>
                            <Badge color="primary">
                                Cộng tác viên
                            </Badge>
                        </Col>
                        <Col lg={'1'} md={'1'}>
                            <i className="fas fa-angle-double-up" onClick={() => {
                                updateAdmin(e.id, e, 4)
                                    .then(res => {
                                        if (res.success) {
                                            const self = this;
                                            setTimeout(() => {
                                                self.setState({
                                                    ...self.state,
                                                    isLoading: true
                                                })
                                            }, 1000)
                                            setTimeout(() => {
                                                self.setState({
                                                    ...self.state,
                                                    isLoading: false
                                                })
                                                self.getListAdmin();
                                            }, 2000)
                                        }
                                        else {
                                            alert(res.message)
                                        }

                                    })
                            }} />
                        </Col>
                        <Col lg={'1'} md={'1'}>
                        <i className="fas fa-user-times" onClick = {()=>{
                                deleteStudent(e.id)
                                    .then(res=>{
                                        if(res.success){
                                            const self = this;
                                            setTimeout(() => {
                                                self.setState({
                                                    ...self.state,
                                                    isLoading: true
                                                })
                                            }, 1000)
                                            setTimeout(() => {
                                                self.setState({
                                                    ...self.state,
                                                    isLoading: false
                                                })
                                                self.getListAdmin();
                                            }, 2000)
                                        }
                                        else{
                                            alert(res.message)
                                        }
                                    })
                            }} 
                        />
                        </Col>
                    </Row>
                </CardHeader>
            )
        })

        if (this.state.valunteers.length === 0) {
            return null
        }
        else {
            return (
                <Card color="danger">
                    {tmp}
                </Card>
            )
        }
    };

    /*-------------------------------------------------------------------------------------------------- */
    render() {

        return (
            <div>
                <CreateAcount
                    modal={this.state.modal}
                    toggle={this.toggleCreateAcount}
                    loadingMode={this.loadingMode}
                />
                <div className="animated fadeIn">
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col lg={'1'} md={'1'}>Stt</Col>
                                <Col lg={'4'} md={'4'}>Họ và tên</Col>
                                <Col lg={'2'} md={'2'}>Tên tài khoản</Col>
                                <Col lg={'1'} md={'1'}>Vai trò</Col>
                            </Row>
                        </CardHeader>
                    </Card>
                    {
                        this.renderAdmin()
                    }
                    {
                        (this.state.isLoading) ?
                            <ReactLoading
                                id="admin-loading"
                                type="cylon"
                                color="#1e9ecb"
                            /> : null
                    }
                    {
                        this.renderValunteer()
                    }
                    <div className="card">
                        <Button color={"primary"} id={'btn-pill'}
                            onClick={this.toggleCreateAcount}
                        >
                            Thêm người cộng tác
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}