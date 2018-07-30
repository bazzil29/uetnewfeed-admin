import React, { Component } from 'react';
import {  DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import {  AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../img/Icon-44@2x.png';
import sygnet from '../../img/sygnet.svg';
import { withRouter } from "react-router-dom";


const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
    render() {

        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <AppNavbarBrand
                    full={{ src: logo, width: 48, height: 48, alt: 'CoreUI Logo' }}
                    minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
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
                            <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} className="img-avatar" alt="profilePicture" />
                        </DropdownToggle>
                        <DropdownMenu right style={{ right: 'auto' }}>
                            <DropdownItem header tag="div" className="text-center"><strong>Thông tin</strong></DropdownItem>
                            <DropdownItem><i className="fa fa-user"/>Tài khoản</DropdownItem>
                            <DropdownItem><i className="fa fa-wrench"/>Cài đặt tài khoản</DropdownItem>
                            <DropdownItem onClick={()=>{
                                this.props.history.push("/login")
                            }}><i className="fa fa-lock" />Đăng xuất</DropdownItem>
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
