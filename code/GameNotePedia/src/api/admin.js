import service from '@/utils/request'
//登录接口
export function login(data){
    return service.post('/login',data)
}
