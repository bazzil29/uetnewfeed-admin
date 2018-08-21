import { getToken } from './LocalServices';
const url = 'http://192.168.0.61:3005';
export const login = (user, password) => {
    const request = new Request(url + `/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            password: password
        }),
    });
    return fetch(request)
        .then(res => res.json())
        .catch((err) => {
            console.log(err);
        })
}

export const getListEvent = (page) => {
    const axios = require('axios');
    const getUrl = url + `/api/events/`;
    const token = getToken();
    return axios.get(getUrl, {
        params: {
            index: page
        },
        headers: {
            token: token,
        }
    });
}

export const getEventDetails = (id) => {
    const token = getToken();
    const request = new Request(url + `/api/events/` + id, {
        method: 'GET',
        headers: {
            token: token,
        },
    });
    return fetch(request)
        .then((res) => {
            return res.json();
        })
}
export const updateEvent = (id, data) => {
    const token = getToken();
    const request = new Request(url + `/api/events/` + id, {
        method: 'PUT',
        headers: {
            token: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                header: data.header,
                content: data.content,
                image: data.image,
                place: data.place,
                time_start: data.time_start,
                event_type: data.event_type,
                introduce: data.introduce,
            }
        )
    });
    return fetch(request)
        .then((res) => {
            return res.json();
        })
}

export const addEvent = (data) => {
    const token = getToken();
    const request = new Request(url + `/api/events/`, {
        method: 'POST',
        headers: {
            token: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                header: data.header,
                content: data.content,
                image: data.image,
                place: data.place,
                time_start: data.time_start,
                introduce: data.introduce,
                event_type: data.event_type
            }
        )
    });
    return fetch(request)
        .then((res) => {
            return res.json();
        })
        .catch((res) => {
            console.log(res);
        })
}

export const deleteEvent = (id) => {
    const token = getToken();
    const request = new Request(url + `/api/events/` + id, {
        method: 'DELETE',
        headers: {
            token: token,
        },
    });
    return fetch(request)
        .then((res) => {
            return res.json();
        })
}

export const createNotification = (e) => {
    const token = getToken();
    const request = new Request(url + `/api/notification/work_with_content_notification`, {
        method: 'POST',
        headers: {
            token: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                title: e.title,
                body: e.body,
            }
        )
    }
    )

    return fetch(request)
        .then((res) => {
            return res.json();
        })
}

export const getFalcuty = () => {
    const token = getToken();
    const res = new Request(url + "/api/admin/faculty", {
        method: "GET",
        headers: {
            token: token,
        }
    })

    return fetch(res)
        .then((res) => {
            return res.json();
        })

}

export const getCourse = (falcuty) => {
    const token = getToken();
    const res = new Request(url + "/api/admin/get_list", {
        method: "GET",
        headers: {
            token: token,
        }
    })
    return fetch(res)
        .then(res => res.json());
}

export const getMajor = (id) => {
    const token = getToken();
    const res = new Request(url + "/api/admin/get_list?id_course=" + id, {
        method: "GET",
        headers: {
            token: token,
        }
    })
    return fetch(res)
        .then(res => res.json());
}

export const getStudentByClassName = (id) => {
    const token = getToken();
    const res = new Request(url + "/api/admin/students?id_class=" + id, {
        method: "Get",
        headers: {
            token: token,
        }
    })
    return fetch(res)
        .then((res) => res.json());
}

export const updateStudent = (id, data) => {
    const token = getToken();
    console.log(data, id);
    const res = new Request(url + "/api/admin/students/" + id, {
        method: "PUT",
        headers: {
            token: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: data.email,
                phone_number: data.phone_number,
                full_name: data.full_name,
                mssv: data.mssv,
                id_class: data.id_class,
                faculty: data.faculty,
                id_course: data.id_course,
                role_id:data.role_id
            }
        )
    })
    return fetch(res)
        .then((res) => res.json())
}

export const getStudentDetail = (id) => {
    const token = getToken();
    const res = new Request(url + "/api/admin/student/" + id, {
        method: "GET",
        headers: {
            token: token
        },
    });
    return fetch(res)
        .then(res => res.json())
}