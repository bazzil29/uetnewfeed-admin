
import Home from './Components/Home/Home';
import EventList from "./Components/Home/EventList/EventList";
import StudentList from "./Components/Home/StudentList/StudentList";
import ManageAdmin from './Components/Home/Admin/ManageAdmin';
import NotificationList from './Components/Home/NotifactionList/NotificationListx';
import './Components/Home/Admin/ManageAdmin.css';


const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/event', exact: true, name: 'Sự kiện', component: EventList},
  { path: '/event/event-list', name: 'Danh sách sự kiện', component: EventList },
  { path: '/event/add-event', name: 'Thêm sự kiện', component: Home },
  { path: '/notification-list', name: 'Thông báo', component: NotificationList},
  { path: '/student-list', exact:true, name: 'Danh sách sinh viên', component: StudentList },
  { path: '/admin', exact:true, name: 'Danh sách admin', component: ManageAdmin },
];

export default routes;
