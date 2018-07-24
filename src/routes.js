import React from 'react';
import Loadable from 'react-loadable'

import Home from './Components/Home/Home';
import EventList from "./Components/Home/EventList/EventList";
import StudentList from "./Components/Home/StudentList/StudetnList";

function Loading() {
  return <div>Loading...</div>;
}

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Home },
  { path: '/event', exact: true, name: 'Sự kiện', component: EventList},
  { path: '/event/event-list', name: 'Danh sách sự kiện', component: EventList },
  { path: '/event/add-event', name: 'Thêm sự kiện', component: Home },
  { path: '/event/notification-list', name: 'Danh sách thông báo', component: Home },
  { path: '/student-list', name: 'Danh sách sinh viên', component: StudentList },


];

export default routes;
