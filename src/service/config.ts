export const TIME_OUT = 10000

// 区分开发环境和生产环境
let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://codercba.com:9002'
} else {
  BASE_URL = 'http://codercba.com:9002'
}

export { BASE_URL }
