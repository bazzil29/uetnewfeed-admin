import React,{Component} from 'react';
import {Row,CardHeader,Card,Col} from 'reactstrap'
export default class ManageAdmin extends React.Component{
    render(){
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
                </div>
            </div>
        )

    }   
}