import axios from "axios";
import {baseUrl} from './Constants/constants'

const instance = axios.create({
    baseUrl: baseUrl,
})

export default instance