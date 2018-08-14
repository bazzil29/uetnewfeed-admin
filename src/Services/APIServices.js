import { getToken } from './LocalServices';
const url = 'http://192.168.2.182:3005';
const token = getToken();
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
            token:token,
        }
    });
}   

export const getEventDetails = (id)=>{
    const request = new Request(url + `/api/events/`+id, {
        method: 'GET',
        headers: {
            token:token,
        }, 
    });
    return fetch(request)
        .then((res)=>{
            return res.json();
        })
}
export const updateEvent = (id,data)=>{
    const request = new Request(url + `/api/events/`+id, {
        method: 'PUT',
        headers: {
            token:token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                header: data.header,
                content: data.content,
                image: data.image,
                place: data.place,
                time_start: data.time_start,
                event_type:1,
            }        
        )
    });
    return fetch(request)
        .then((res)=>{
            return res.json();
        })
}

export const addEvent = (data)=>{
    const request = new Request(url + `/api/events/`, {
        method: 'POST',
        headers: {
            token:token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                header: data.header,
                content: data.content,
                image: data.image,
                place: data.place,
                time_start: data.time_start,
                introduce_eve:"gioi thieu",  
                event_type:1
            }
        )        
    });
    return fetch(request)
        .then((res)=>{
            return res.json();
        })
        .catch((res)=>{
            console.log(res);
        })
}

export const deleteEvent = (id)=>{
    const request = new Request(url + `/api/events/` + id, {
        method: 'DELETE',
        headers: {
            token:token,
        },
    });
    return fetch(request)
        .then((res)=>{
            return res.json();
        })
}

export const createNotification = (e) =>{
    const request = new Request(url + `/api/notification/work_with_content_notification`, {
        method: 'POST',
        headers: {
            token:token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                title:e.title,
                body:e.body,
            }
        )    
        }
    )

    return fetch(request)
        .then((res)=>{
            return res.json();
        })
}

export const getFalcuty = () =>{
    const res  = new Request(url+"/api/admin/faculty" , {
        method:"GET",   
        headers: {
            token:token,
        }
    })

    return fetch(res)
                .then((res)=>{
                    return res.json();
                })

}

export const getCourse = (falcuty) =>{
    const res = new Request (url + "/api/admin/course",{
        method:"GET",
        headers:{
            token:token,
        }
    })
    return fetch(res)
            .then(res=>res.json());
}
 
export const getMajor = (falcuty,course) =>{
    const res = new Request (url + "/api/admin/class",{
        method:"GET",
        headers:{
            token:token,
        }
    })
    return fetch(res)
            .then(res=>res.json());
}

export const getStudentByClassName = (className) => {
    const res = new Request (url + "/api/admin/work_with_students/?class_name=" + className ,{
        method:"Get",
        headers:{
            token:token,
        }
    }) 
    return fetch(res)
            .then((res)=>res.json());
}

export const updateStudent = (id,data) => {
    const res = new Request (url + "api/admin/work_with_students/" +id , {
        method:"PUT",
        headers:{
            token:token,
        },
        body:JSON.stringify({
            "email": data.email,
            "fullname":data.fullname,
            "major": data.major,
            "faculty": "",
            "phonenumber": data.phonenumber,
            "course": data.course,
        })
    })
    return fetch(res)
                .then ((res)=>res.json())
}

export const getStudentDetail = (id) =>{
    const res  = new Request (url + "/api/admin/work_with_student?id=" + id ,{
        method: "GET",
        headers:{
            token:token
        },
    });
    return fetch(res)
            .then(res=>res.json())
}