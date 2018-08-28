import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
    AppBreadcrumb,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultHeader from "../Header/Header";
import DefaultFooter from "../Footer/Footer";
import { getToken } from '../../Services/LocalServices';
import ChangePassword from './ChangePassword';


class Home extends Component {
    state = {
        isLogin: getToken() != null,
        isOpenChangePassword:false
    };

    componentDidMount() {
        const token = getToken();
        this.setState({
            isLogin:(token != null)
        });
    };

    toggleChangePassword = () =>{
        this.setState({
            ...this.state,
            isOpenChangePassword:!this.state.isOpenChangePassword
        })        
    };

   

    render() {
        if (this.state.isLogin) {
            return (
                <div className="app">
                    <ChangePassword 
                        modal={this.state.isOpenChangePassword}  
                        toggle={()=>{
                            this.toggleChangePassword()
                        }}/>
                    <AppHeader fixed>
                        <DefaultHeader openChangePassword = {()=>{
                            this.toggleChangePassword();
                            }}/>
                    </AppHeader>
                    <div className="app-body">
                        <AppSidebar fixed display="lg">
                            <AppSidebarHeader />
                            <AppSidebarForm />
                            <AppSidebarNav navConfig={navigation} {...this.props} />
                            <AppSidebarFooter />
                            <AppSidebarMinimizer />
                        </AppSidebar>
                        <main className="main">
                            <AppBreadcrumb appRoutes={routes} />
                            <Container fluid>
                                <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component ? 
                                                (
                                                    <Route 
                                                        key={idx} 
                                                        path={route.path} 
                                                        exact={route.exact} 
                                                        name={route.name} 
                                                        render={props => (
                                                                            <route.component {...props} />
                                                                         )
                                                                } 
                                                    />
                                                )
                                                : (null);
                                    },
                                    )}
                                    <Redirect from="/" to="/event" />
                                </Switch>
                            </Container>
                        </main>
                    </div>
                    <AppFooter>
                        <DefaultFooter />
                    </AppFooter>
                </div>
            );
        }
        else {
            return <Redirect to={'/login'} />;
        }

    }
}

export default Home;
