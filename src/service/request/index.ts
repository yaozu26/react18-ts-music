import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'

interface IInterceptos {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailFn?: (err: any) => any
  responseSuccessFn?: (res: AxiosResponse) => AxiosResponse
  responseFailFn?: (err: any) => any
}

interface IRequestConfig extends AxiosRequestConfig {
  interceptors?: IInterceptos
}

class YzRequest {
  instance: AxiosInstance
  constructor(config: IRequestConfig) {
    this.instance = axios.create(config)

    // 给每个instance实例添加拦截器(请求、响应)
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    // 给特定的instance实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailFn
    )
  }

  request(config: IRequestConfig) {
    return this.instance.request(config)
  }

  get(config: IRequestConfig) {
    return this.request({ ...config, method: 'GET' })
  }
}

export default YzRequest
