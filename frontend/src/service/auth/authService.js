import { tokenService } from "./tokenService";
import HttpClient from "../../infra/HttpClient/HttpClient"


export const authService = {
    async login({username, password}) {
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,{
            method: 'POST',
            body: {
                username,
                password
            }
        })
        .then(async(resp)=>{
            if(!resp.ok) throw new Error('invalid login')
            const body = await resp.body;
            // console.log(body.data.access_token)

            tokenService.save(body.data.access_token)
        })
    }

}