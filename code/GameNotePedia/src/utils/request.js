import axios from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  // 请求发送前做些什么,比如添加token等（用户识别）
    (config) => {
        const token=localStorage.getItem('token')
        // 如果有token，就添加到请求头中
        if(token){
            config.headers['token']=token
        }
        return config
    },
    // 对请求错误做些什么
    (error) => {
        return Promise.reject(error)
    }
)
// 响应拦截器
service.interceptors.response.use(
     // 对响应数据做点什么,一帮在该区域对返回来的数据进行处理
    (response) => {
        // data是返回来的数据,config是请求配置
        const {data,config}=response
        // 处理业务状态码
        if(data.code=='1'){
            // 如果正常，才把数据返回去
            return data.data
        }else
        {
                        if(data.code==='0')
                        {
                            // 如果不是登录页面，就提示用户登录
                            if(!config.url?.includes('/user-message/login')){
                                ElMessage.error(data.msg || '登录过期，请重新登录')
                                // 清除token
                                localStorage.removeItem('token')
                                // 清除用户信息
                                localStorage.removeItem('userInfo')
                                // 跳转到登录页面
                            window.location.href='/user-message/login'
                            }else
                            {
                                ElMessage.error(data.msg || '登录过期，请重新登录')
                                return Promise.reject('网络请求失败...')
                            }
                        }
        }
        return response
    },
    // 对响应错误做点什么
    (error) => {
        return Promise.reject(error)
    }
)
export default service