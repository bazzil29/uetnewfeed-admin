const url = 'http://192.168.2.155:3003';
export const login = (user, password) => {
    const request = new Request(url +`/api/login`, {
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
        .catch((err)=>{
            console.log(err);
        })
}      

export const getListEvent=(page)=>{
    const axios = require('axios');
    const getUrl = url + `/api/admin/work_with_events/`;
    return axios.get(getUrl,{
        params: {
            index: page
          },
        headers:{
            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGFjY291bnQiOjMsImlhdCI6MTUzMzYyNzM1MywiZXhwIjoyMDMzNjI3MzUzfQ.YZMuDauoeJ4LdTh18O6VZlwHLTkuYOqNHLkiApAE3y8",
        }
    });
}   