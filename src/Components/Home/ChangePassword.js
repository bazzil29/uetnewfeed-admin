import React from "react";
import { withRouter } from "react-router-dom";
import { changePassword } from '../../Services/APIServices';
import { Modal, ModalHeader, Label, ModalBody, ModalFooter, Button } from "reactstrap";
import "./Home.css";
import { deleteToken } from '../../Services/LocalServices';
class ChangePassword extends React.Component {
    state = {
        isWrongPassword: false
    };

    render() {


        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Đổi mật khẩu</ModalHeader>
                <ModalBody>
                    <Label>
                        Mật khẩu cũ:
                    </Label>
                    <input type="password" className="form-control" ref="oldPassword" />
                    <Label>
                        Mật khẩu mới:
                    </Label>
                    <input type="password" className="form-control" ref="newPassword" />
                    <Label>
                        Nhập lại mật khẩu:
                    </Label>
                    <input type="password" className="form-control" ref="newPasswordUnder" />
                    {
                        (this.state.isWrongPassword) ? <Label id="danger-password">Mật khẩu không khớp</Label> : null
                    }
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => {

                        const oldPassword = this.refs.oldPassword.value;
                        const newPassword = this.refs.newPassword.value;
                        const newPasswordUnder = this.refs.newPasswordUnder.value;
                        console.log(oldPassword, newPassword);
                        if (newPassword === newPasswordUnder) {
                            changePassword(oldPassword, newPassword)
                                .then(res => {
                                    console.log(res)
                                    if (res.success) {
                                        this.props.toggle();
                                        deleteToken();
                                        this.props.history.push("/login");
                                    }
                                    else {
                                        alert(res);
                                    }
                                })
                        }
                        else {
                            this.setState({
                                ...this.state,
                                isWrongPassword: !this.state.isWrongPassword
                            })
                        }

                    }}>
                        Xong
                    </Button>
                    <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default withRouter(ChangePassword);