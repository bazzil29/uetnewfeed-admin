import React  from 'react';
import { Row, CardHeader, Card, Col, Badge, Button } from 'reactstrap';
import './ManageAdmin.css';
export default class ManageAdmin extends React.Component {
    state = {
        admins: [1, 2, 3, 4],
        valunteers: [1, 2, 4, 4]
    }
    /*-------------------------------------------------------------------------------------------------- */
    renderAdmin = () => {
        return this.state.admins.map((e, index) => {
            return (
                <CardHeader key={index}>
                    <Row >
                        <Col lg={'1'} md={'1'}>1</Col>
                        <Col lg={'4'} md={'4'}>Ngô Minh Phương</Col>
                        <Col lg={'2'} md={'2'}>16021629 </Col>
                        <Col lg={'2'} md={'2'}> <Badge color="danger">Admin</Badge></Col>
                        <Col lg={'2'} md={'2'}>
                            <Button color="warning">
                                Chỉnh sửa
                                </Button>
                        </Col>
                    </Row>
                </CardHeader>
            )
        })
    };

    renderValunteer = () => {
        return this.state.valunteers.map((e, index) => {
            return (
                <CardHeader key={index}>
                    <Row >
                        <Col lg={'1'} md={'1'}>1</Col>
                        <Col lg={'4'} md={'4'}>Ngô Minh Phương</Col>
                        <Col lg={'2'} md={'2'}>16021629</Col>
                        <Col lg={'2'} md={'2'}> <Badge color="primary">Cộng tác viên</Badge></Col>
                        <Col lg={'2'} md={'2'}>
                            <Button color="info">
                                Chỉnh sửa
                                </Button>
                        </Col>
                    </Row>
                </CardHeader>
            )
        })
    };

    /*-------------------------------------------------------------------------------------------------- */
    render() {
        return (
            <div>
                <div className="animated fadeIn">
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col lg={'1'} md={'1'}>Stt</Col>
                                <Col lg={'4'} md={'4'}>Họ và tên</Col>
                                <Col lg={'2'} md={'2'}>ID</Col>
                                <Col lg={'1'} md={'1'}>Vai trò</Col>
                            </Row>
                        </CardHeader>
                    </Card>
                    <Card color="primary">
                        {
                            this.renderAdmin()
                        }
                    </Card>
                    <Card color="danger">
                        {
                            this.renderValunteer()
                        }
                    </Card>
                    <div className="card">
                        <Button color={"primary"} id={'btn-pill'}
                               >
                            Thêm người cộng tác
                        </Button>
                    </div>
                </div>
            </div>
        )

    }
}