import {http} from "@/services/core/http";

export const signup = (body: any) => {
  return http.post('/users', body)
}
export const login = (body: any) => {
  return http.post('/users/login', body)
}