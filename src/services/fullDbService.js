import http from "./httpService"
const apiEndpoint = "http://localhost:3001/api/full"

export function getFullDb() {
    const fullDb = http.get(apiEndpoint)
    return fullDb
}

export default {
    getFullDb
}