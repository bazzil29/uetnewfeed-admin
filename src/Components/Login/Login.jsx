import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';
import { login } from '../../Services/APIServices';
import Redirect from "react-router-dom/es/Redirect";
import { saveToken, getToken } from '../../Services/LocalServices';
import './Login.css';

class Login extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isLogin: false,
        };
        this.loginButton = React.createRef();    
    };

    componentDidMount() {
        const token = getToken();
        this.setState({
            isLogin: (token != null)
        })
    };

    handleLogin = () => {
        const user = document.getElementById("user-login").value;
        const password = document.getElementById("password-login").value;
        login(user, password)
            .then((res) => {
                if (res.success) {
                    const tmp = document.getElementById('fail-login-info');
                    tmp.style.visibility = 'hidden';
                    saveToken(res.accessToken);
                    this.setState({
                        isLogin: true
                    });
                }
                else {
                    const tmp = document.getElementById('fail-login-info');
                    tmp.style.visibility = 'visible';
                }
            })
            .catch((err) => {
            })

    };

    render() {
        if (this.state.isLogin) {
            return <Redirect to={'/'} />;
        }
        else {
            return (
                <div className="app flex-row align-items-center">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="6">
                                <CardGroup>
                                    <Card className="p-4">
                                        <CardBody>
                                            <h1>Đăng nhập</h1>
                                            <p 
                                                className="text-muted"
                                            >
                                                Đăng nhập vào tài khoản của admin
                                            </p>
                                            <InputGroup className="mb-3" >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        <i className="icon-user" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input 
                                                    type="text" 
                                                    placeholder="Username" 
                                                    id="user-login" 
                                                    onKeyUp={(e) => {
                                                        e.preventDefault();
                                                        if(e.keyCode === 13){
                                                            this.loginButton.current.onClick();
                                                                    }
                                                    }} 
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        <i className="icon-lock" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input  type="password" 
                                                        placeholder="Password" 
                                                        id="password-login" 
                                                        onKeyUp={(e) => {
                                                             e.preventDefault();
                                                            if(e.keyCode === 13){
                                                            this.loginButton.current.onClick();
                                                        }
                                                }} 
                                                        />
                                            </InputGroup>
                                            <p id='fail-login-info'>Sai thông tin tài khoản</p>
                                            <Row>
                                                <Col xs="6">
                                                    <Button
                                                        ref={this.loginButton} 
                                                        color="primary"
                                                        className="px-4"
                                                        onClick={this.handleLogin}>
                                                        Đăng nhập
                                                    </Button>
                                                </Col>
                                                <Col xs="6" className="text-right">
                                                    <Button 
                                                        color="link" 
                                                        className="px-0"
                                                    >
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }

    }
}

export default Login;
