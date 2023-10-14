// import { API_URL } from "../constants/constants";
import axios from "axios";
// const base_url = API_URL.BASE;



export default class RequestApiHelper {
    static appToken = null;

    static async get(url, params) {
        try {
            var result = await axios.get(url, {
                headers: {
                    Authorization: this.appToken
                },
                params: params
            })
            if(result.status!=200){
                return {};
            }
            return result.headers;
        } catch (error) {
            console.log(`Service error ${url}`,error)
        }

    }

    static async getNoneToken(url, params) {
        try {
            var result = await axios.get(url, {
                params: params
            })
            if(result.status!=200){
                return {};
            }
            return result.data;
        } catch (error) {
            console.log(`Service error ${url}`,error)
        }

    }



}
