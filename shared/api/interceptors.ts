import { AxiosError } from 'axios'

export const errorInterceptor = (error: AxiosError) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        console.error('인증이 필요합니다')
        break
      case 403:
        console.error('권한이 없습니다')
        break
      case 404:
        console.error('요청한 리소스를 찾을 수 없습니다')
        break
      case 500:
        console.error('서버 에러가 발생했습니다')
        break
      default:
        console.error('알 수 없는 에러가 발생했습니다')
    }
  } else if (error.request) {
    console.error('서버에 연결할 수 없습니다')
  }

  return Promise.reject(error)
}
