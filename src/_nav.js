export default {
  items: [
    {
      name: 'Trang quản lý',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'UET',
      },
    },
    {
      title: true,
      name: 'Quản lý sự kiện',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Danh sách sự kiện',
      url: '/event/event-list',
      icon: 'fas fa-calendar-alt',
    },
     {
      name: 'Danh sách thông báo',
      url: '/event/notification-list',
      icon: 'fas fa-calendar-alt',
    },
    {
      title: true,
      name: 'Quản lý sinh viên',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Danh sách sinh viên',
      url: '/student-list',
      icon: 'fas fa-calendar-alt',
    },
    {
      title: true,
      name: 'Cài đặt quản trị viên',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Danh sách admin',
      url: '/admin',
      icon: 'fas fa-calendar-alt',
    },
  ],
};
