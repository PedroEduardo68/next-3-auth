// export default function handler(request, response) {
//     console.log(request.body)
//     response.json({
//         hello:"workd"
//     })
// }
import nookies from 'nookies'



const REFRESH_TOKEN_NAME = 'REFRESH_TOKEN_NAME'

const controllers = {
    async storeRefreshToken(req, res) {
    const ctx = { req, res}
    console.log(req.body)

    nookies.set(ctx, REFRESH_TOKEN_NAME, req.body.refresh_token, {
        httpOnly : true,
        sameSite: 'lax',
    })



    },
    async displayCookies(){
        const ctx = { req, res}
        res.json({
            data:{
                cookies: nookies.get({ctx})
            }
        })

    }
}


const controllersBy = {
    POST: controllers.storeRefreshToken,
    GET: controllers.displayCookies
}



export default function handler(request, response) {
    if(controllersBy[request.method]) return controllersBy[request.method](request,response)


    console.log(request.body)
    response.status(404)
}