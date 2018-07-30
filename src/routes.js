
import Home from './Components/Home/Home';
import EventList from "./Components/Home/EventList/EventList";
import StudentList from "./Components/Home/StudentList/StudetnList";
import NotificationList from "./Components/Home/NotifactionList/NotificationList";


const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/event', exact: true, name: 'Sự kiện', component: EventList},
  { path: '/event/event-list', name: 'Danh sách sự kiện', component: EventList },
  { path: '/event/add-event', name: 'Thêm sự kiện', component: Home },
  { path: '/event/notification-list', name: 'Danh sách thông báo', component: NotificationList },
  { path: '/fit/k59/student-list', name: 'Danh sách sinh viên', component: StudentList },
  { path: '/fit', exact:true ,name: 'Khoa CNTT', component: StudentList },
  { path: '/k59', exact:true ,name: 'K59', component: StudentList },
];

export default routes;
