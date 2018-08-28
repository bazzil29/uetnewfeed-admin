import { getToken } from './LocalServices';
//const url = 'http://192.168.2.174:3005';
const url = 'http://qldv.uet.vnu.edu.vn';
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
        .catch(err => err)

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
                link_register: data.link_register
            }
        )
    });
    return fetch(request)
        .then((res) => {
            return res.json();
        })
        .catch(err => err)

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
                event_type: data.event_type,

            }
        )
    });
    return fetch(request)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err;
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
        .catch(err => err)

}


export const getStudentEvent = (id) =>{
    const token  = getToken();
    const res  = new Request (url +"/api/admin/student_event/" +id ,{
        method:"GET",
        headers:{
            token:token
        }
    })
    return fetch(res)
            .then(res=>res.json())
}


export const addStudentToEvent = (mssv, id_eve) => {
    const token = getToken();
    const res = new Request(url + "/api/admin/student_event", {
        method: "POST",
        headers:{
            token:token,
            'content-type':"application/json"
        },
        body: JSON.stringify({
            mssv: mssv,
            id_eve: id_eve
        })
    })
    return fetch(res)
            .then(res=>res.json())
            .catch(err=>err)

}

export const deleteStudentFromEvent = (id, id_eve) => {
    const token = getToken();
    const res = new Request(url + "/api/admin/student_event", {
        method: "DELETE",
        headers:{
            token:token,
            'content-type':"application/json"
        },
        body: JSON.stringify({
            id_stu:id,
            id_eve:id_eve
        })
    })
    return fetch(res)
            .then(res=>res.json())
            .catch(err=>err)

}



/**
 * 
 * 
 * 
 * 
 * 
 * 
 */

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
        .catch(err => err)
}

/**
* 
* 
* 
* 
* 
* 
*/


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
        .catch(err => err)

}

export const getCourse = (falcuty) => {
    const token = getToken();
    const res = new Request(url + "/api/admin/get_list", {
        method: "GET",
        headers: {
            token: token,
            'Content-Type': 'application/json'
        }
    })
    return fetch(res)
        .then(res => res.json())
        .catch(err => err)
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
        .then(res => res.json())
        .catch(err => err)
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
        .then((res) => res.json())
        .catch(err => err)
}

export const updateStudent = (id, data) => {
    const token = getToken();
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
                role_id: data.role_id
            }
        )
    })
    return fetch(res)
        .then((res) => res.json())
        .catch(err => err)
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
        .catch(err => err)
}

export const addStudent = (data) => {
    const token = getToken();
    const res = new Request(url + "/api/admin/students", {
        method: "POST",
        headers: {
            token: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "mssv": data.mssv,
                "full_name": data.full_name,
                "id_class": data.id_class,
                "id_course": data.id_course,
                "faculty": "1"
            }
        )
    });

    return fetch(res)
        .then(res => res.json())
        .catch(err => err)
}


export const deleteStudent = (id) => {
    const token = getToken();
    const res = new Request(url + "/api/admin/students/" + id, {
        method: "DELETE",
        headers: {
            token: token
        },
    })
    return fetch(res)
        .then(res => res.json())
        .catch(err => err)
}

export const getPageNumbers = () => {
    const token = getToken();
    const res = new Request(url + "/api/events/page", {
        method: "GET",
        headers: {
            token: token
        }
    })
    return fetch(res)
        .then(res => res.json())
        .catch(err => err)
}

export const getURLImg = (file) => {
    
    var form = new FormData();
    form.append("fileName", file);
    const token = getToken();
    const res = new Request(url + "/api/image_file", {
        method: "POST",
        headers: {
            token: token
        },
        body: form
    })
    return fetch(res)
        .then(res => res.json())
        .catch(err => err)
}

/**
 *Phần xử lý vể chỉnh sửa admin
 *
 */
export const createAcount = (data) =>{
    const token = getToken();
    const res  = new Request(url+"/api/admin/role_user" , {
        method:"POST",
        headers:{
            token:token,
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
                phone_number: data.phone_number,
                password: data.password,
                full_name: data.full_name,
                role_id: data.role_id,
                email: data.email
        })
    });
    return fetch(res)
            .then(res=>res.json())
            .catch(err=>err)
}


export const getUserByRoleId = (id) =>{
    const token = getToken();
    const res = new Request(url+"/api/admin/students?role_id=" + id,{
        method:"GET",
        headers:{
            token:token
        }
    })

    return fetch(res)
            .then(res=>res.json())
}

export const updateAdmin = (id,data,role_id) => {
    const token = getToken();
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
                faculty: data.falcuty,
                id_course: data.id_course,
                role_id: role_id
            }
        )
    })
    return fetch(res)
        .then((res) => res.json())
        .catch(err => err)
}


export const changePassword = (oldPassword,newPassword)=>{
    const token = getToken();
    const res =  new Request (url + "/api/change_password", {
        method:"PUT",
        headers:{
            token:token,
            'Content-Type':"application/json"
        },
        body:JSON.stringify({
                password: oldPassword,
                newPassword: newPassword
        })
    })

    return fetch(res)
                .then(res=>res.json())
                .catch(err=>err)
}

export const resetPassword = (mssv) =>{
    const token = getToken();
    const res = new Request (url +"/api/reset_password/" + mssv,{
        method:"PUT",
        headers:{
            token: token
        }
    });
    return fetch(res)
            .then(res=>res.json())
            .catch(err=>err)
}


/**
 * import file student to server
 */

 export const importStudentsData  = (file,_course,_class,_faculty) =>{
    const token = getToken(); 
    var form = new FormData();
    form.append("file", file);
    form.append("_course", _course);
    form.append("_class", _class);
    form.append("_faculty", _faculty);

    const res = new Request (url + "/api/admin/data_student", {
        method:'POST',
        headers:{
            token:token
        },
        body:form
    })

    return fetch(res)
            .then(res=>res.json())
            .catch(err =>err)
 }

 export const importStudentsToEvent = (file,id_eve) =>{
    const token = getToken();
    const form = new FormData();
    form.append("file",file);
    form.append("id_eve",id_eve);
    const res  = new Request(url + "/api/admin/data_event", {
        method:"POST",
        headers:{
            token:token
        },
        body:form
    })
    return fetch(res)
                .then(res=>res.json())
                .catch(err=>err)
 }