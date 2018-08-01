
export const login = (user, password) => {
    const url = `http://192.168.2.191:3006/api/login`;
    const request = new Request(url, {
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