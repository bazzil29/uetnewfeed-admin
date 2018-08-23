import React from "react";
import {Modal,Button,ModalHeader,ModalBody,ModalFooter,Label} from "reactstrap";
import { createAcount } from '../../../Services/APIServices';

export default class CreateAcount extends React.Component {

    state = {
        info:{
            role_id:3
        }
    }

    createAcount = () =>{
        const user = this.refs.phone.value;
        const name = this.refs.name.value;
        const role_id = this.state.info.role_id;
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const data = {
            full_name:name,
            phone_number:user,
            role_id:role_id,
            email:email, 
            password:password
        }
        console.log(data);

        createAcount(data)
            .then(res=>{
                console.log(res);
                if(res.success){
                    console.log(res);
                    this.props.toggle();
                    this.props.loadingMode();
                }
                else{
                    alert(res.reason);
                }
            })
    }

    renderPosition = () => {
        const position = this.state.info.role_id;
        if (position === 2) {
            return "Sinh viên";
        }
        else if (position === 3) {
            return "Cộng tác viên";
        }
        else if(position === 4){
            return "Admin";
        }

        return "Admin chính"
        
    };
    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Tạo tài khoản Admin , Cộng tác viên</ModalHeader>
                <ModalBody>
                    <Label>
                        Số điện thoại(dùng làm tài khoản đăng nhập):
                    </Label>
                    <input className="form-control" type="number" ref = "phone"/>
                    <Label>
                        Mật khẩu:
                    </Label>
                    <input className="form-control" type="password" ref = "password"/>
                    <Label>
                        Họ và tên:
                    </Label>
                    <input className="form-control" ref = "name"/>
                    <Label>
                        email:
                    </Label>
                    <input className="form-control" ref = "email"/>
                    <Label>
                        Vị trí:
                    </Label>
                    <br/>
                    <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-info dropdown-toggle source-option"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        >
                                        {this.renderPosition()}
                                    </button>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item" onClick={() =>
                                            this.setState({
                                                ...this.state,
                                                info: {
                                                    ...this.state.info,
                                                    role_id: 3
                                                }
                                            })
                                        }>Cộng tác viên</div>
                                        <div className="dropdown-item" onClick={() =>
                                            this.setState({
                                                ...this.state,
                                                info: {
                                                    ...this.state.info,
                                                    role_id: 4
                                                }
                                            })
                                        }>Admin</div>
                                    </div>
                                </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>{
                        this.createAcount()
                        }}>Thêm</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                </ModalFooter>
            </Modal>
        )
    }
}