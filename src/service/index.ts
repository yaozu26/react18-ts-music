import { BASE_URL, TIME_OUT } from './config'
import YzRequest from './request'

const yzRequest = new YzRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default yzRequest
