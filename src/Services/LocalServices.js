export const saveToken =(token)=>{
    const tmp = token.toString();
    localStorage.setItem('token',token);
}

export const getToken =()=>{
    return localStorage.getItem('token');
}
export const deleteToken = () =>{
    localStorage.removeItem('token');
}