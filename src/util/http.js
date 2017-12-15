import axios from 'axios'
axios.defaults.baseURL = 'https://music.163.com';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// get方法
export function fetch(url,params = {})  {
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(err => {
            reject(err);
        })
    })
}

// post方法
export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err);
            })
    })
}

// patch方法
export function patch(url,data ={}) {
    return new Promise ((resolve,reject) => {
        axios.patch(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err);
            })
    })
}

// put方法
export function put(url,data ={}) {
    return new Promise((resolve,reject) => {
        axios.put(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err);
            })
    })
}