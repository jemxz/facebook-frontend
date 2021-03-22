import http from "./httpService"
import jwtDecode from 'jwt-decode'
const apiEndpoint = "http://localhost:3002/api/auth"

export function login (username, password){
    return http.post(apiEndpoint, { username, password })
}

export function getJwt() {
    return localStorage.getItem("token")
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem("token");
        return jwtDecode(jwt)
    } catch (error) {
        return null
    }
}
export default {
    login,
    getJwt,
    getCurrentUser
}