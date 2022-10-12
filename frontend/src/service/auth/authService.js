export const authService = {
    async login({username, password}) {
        return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(async(resp)=>{
            if(!resp.ok) throw new Error('invalid login')
            const body = await resp.json();
            // console.log(body)
        })
    }

}