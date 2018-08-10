import { getToken } from './LocalServices';
const url = 'http://bc188206.ngrok.io';
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
    const request = new Request(url + `/api/events/get_event/?id_event=`+id, {
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
                header: data.name,
                content: data.context,
                image: data.img,
                place: data.place,
                time_start: data.time,
                event_type:1,
            }        
        )
    });
    return fetch(request)
        .then((res)=>{
            return res.json();
        })
}

export const deleteEvent = (id)=>{
    const request = new Request(url + `/api/events/` + id, {
        method: 'DELETE',
        headers: {
            token:token,
            'Content-Type': 'application/json'
        },
    });
    return fetch(request)
        .then((res)=>{
            return res.json();
        })
}
