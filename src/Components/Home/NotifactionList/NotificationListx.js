import React ,{Component} from 'react';
import { Button } from 'reactstrap';
import AddNotification from "./AddNotification/AddNotification";


export default class NotificationList extends Component {
    state = {
        isOpen: false,
        isOpenAdd: false,
    };
    /*----------------------------------------------------------------------------------------------- */
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    toggleAdd = () => {
        this.setState({
            isOpen: this.state.isOpen,
            isOpenAdd: !this.state.isOpenAdd
        })
    };
    /*----------------------------------------------------------------------------------------------- */

    render() {
      //  return <div>asdf</div>

        return (
            <div>
            <AddNotification modal={this.state.isOpenAdd} toggle={this.toggleAdd} />
            <div className="card">
                    <Button
                        color="primary"
                        onClick={this.toggleAdd}>
                        Thêm thông báo
                    </Button>
                </div>
            </div>
        )
    }
}