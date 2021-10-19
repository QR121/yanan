import axios from 'axios'

export function request(config) {
    // 1.创建实例
    const instance = axios.create({
        baseURL: '',
        timeout: 5000
    })
    // 2.axios的拦截器
    instance.interceptors.request.use(config=>{
        // 1.config中里面有一些不符合服务器的要求
        // 2.发送网络请求时候希望在界面显示一个图标
        // 3.某些网络请求如登录token 必须携带一些特殊信息
        return config
    }, err=>{
        // console.log(err);
    })
    // 响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    }),err=>{
        console.log(err);
    }
    
    // 3.发送真正的网络请求
    return instance(config)
}