import axios from "axios";


export interface HttpAdapter{
    getRequest<T>( url:string ):Promise<T>;
}




export class PokeApiFetchAdapter implements HttpAdapter {

    public async getRequest<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data:T = await resp.json();
        console.log("Con Fetch");
        return data;
    }
}


export class PokeApiAdapter implements HttpAdapter {
    
    private readonly axios = axios;

    public async getRequest<T>(url: string): Promise<T> {
        //peticion get
        const { data } = await this.axios.get<T>(url);
        console.log("Con axios");
        
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