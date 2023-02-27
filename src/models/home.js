import http from '@/common/app.http'

export const getUserInfo = () => http({
    url: '/v1/user/info',
    method: 'post'
})
