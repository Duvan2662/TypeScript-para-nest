import axios from "axios";
import { PokeAPIResponse } from "../interfaces/pokeapi-response.interface";



export class PokeApiAdapter {
    
    private readonly axios = axios;

    public async getRequest(url: string) {
        //peticion get
        const { data } = await this.axios.get(url);
        return data
    }
    public async postRequest(url: string, data:any) {
        //peticion post
        return
    }
    public async patchRequest(url: string, data:any) {
        //peticion patch
        return
    }
    public async deleteRequest(url: string) {
        //peticion delete
        return
    }


}