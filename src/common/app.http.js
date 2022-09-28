import axios from 'axios'

const ApiUrl = import.meta.env.VITE_API_URL
const SuccessCode = 200

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((res) => {
    const { config } = res
    const { data, code } = res.data

    // 返回原始数据
    if(config.raw) {
        return +code === SuccessCode ? res.data : Promise.reject(res.data)
    }else {
        return +code === SuccessCode ? data : Promise.reject(data)
    }

    // 是否显示异常提示
    // if(showToast) {
    //     if(+code !== SuccessCode) {
    //         uni.showToast({
    //             title: res.data.msg,
    //             icon: 'none'
    //         })
    //     }
    // }
}, ({ response: res }) => {
    const { config, data, statusText } = res

    if(config.showToast) {
        if(typeof data === 'object') {
            // showToast
            // data.msg
        }else if(typeof data === 'string') {
            // showToast
            // data
        // 后台未定义异常
        }else {
            // 显示HTTP错误内容
            console.log(statusText)
        }
    }

    if(config.raw) {
        return Promise.reject(data)
    }else {
        if(typeof data === 'object') {
            return Promise.reject(data.data)
        }
        return Promise.reject(data)
    }
})

export default function request({ url, data = {}, headers, showToast = true, upload = false, filePath, formData, name, ...otherOptions }) {
    return axios({
        url: new URL(url, ApiUrl).href,
        data,
        // 文件上传特有参数
        name,
        filePath,
        formData,
        showToast,
        ...otherOptions,
        headers: {
            ...headers
        }
    })
}
