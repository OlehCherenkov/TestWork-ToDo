// axios
import axios from 'axios'
const baseURL = process.env.MIX_API_URL
const apiKey = process.env.MIX_API_KEY

function axiosIns(mode) {
    let basicHeaders = {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Api-Key': apiKey,
    }

    return axios.create({
        baseURL,
        timeout: 10000,
        headers: basicHeaders,
    })
}
export default axiosIns
