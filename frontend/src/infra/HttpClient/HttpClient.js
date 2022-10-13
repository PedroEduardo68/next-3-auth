export const HttpClient = async (fetchUrl, fetchOptions) =>{
    return fetch(fetchUrl,{
        ...fetchOptions,
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            ...fetchOptions.headers,
        }, 
        body:fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
    })
    .then(async(resp)=>{
        return {
            ok: resp.ok,
            body: await resp.json(),
        }
    });
}