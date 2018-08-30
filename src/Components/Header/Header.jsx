import React, { Component } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../img/Icon-44@2x.png';
import sygnet from '../../img/sygnet.svg';
import { withRouter } from "react-router-dom";
import { deleteToken } from '../../Services/LocalServices';


const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};


class DefaultHeader extends Component {
    logout = () => {
        deleteToken();
        this.props.history.push("/login");
    }

    render() {


        return (
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <AppNavbarBrand
                    full={{ src: logo, width: 48, height: 48, alt: 'Logo' }}
                    minimized={{ src: sygnet, width: 30, height: 30, alt: 'Logo' }}
                />
                <AppSidebarToggler className="d-md-down-none" display="lg" />

                <Nav className="d-md-down-none" navbar>
                    <NavItem className="px-3">
                        <NavLink href="/">Admin Site</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <AppHeaderDropdown direction="down">
                        <DropdownToggle nav>
                            <img 
                                src={'https://cdn.iconscout.com/public/images/icon/premium/png-512/user-account-profile-avatar-person-student-male-350e51fe6c4466ae-512x512.png'} 
                                className="img-avatar" 
                                alt="profilePicture" 
                            />
                        </DropdownToggle>
                        <DropdownMenu right style={{ right: 'auto' }}>
                            <DropdownItem 
                                header 
                                tag="div" 
                                className="text-center"
                            >
                                <strong>Thông tin</strong>
                            </DropdownItem>
                            <DropdownItem 
                                onClick={
                                    ()=>{this.props.openChangePassword()}
                                    }>
                                <i className="fa fa-wrench"  />
                                Đổi mật khẩu
                            </DropdownItem>
                            <DropdownItem 
                                onClick={this.logout}
                            >
                                <i className="fa fa-lock" />
                                Đăng xuất
                            </DropdownItem>
                        </DropdownMenu>
                    </AppHeaderDropdown>
                </Nav>
            </React.Fragment>
        );
    }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default withRouter(DefaultHeader);
