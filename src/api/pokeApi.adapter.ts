import axios from "axios";



export class PokeApiFetchAdapter {

    public async getRequest<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data:T = await resp.json();

        return data;
    }
}


export class PokeApiAdapter {
    
    private readonly axios = axios;

    public async getRequest<T>(url: string): Promise<T> {
        //peticion get
        const { data } = await this.axios.get<T>(url);
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