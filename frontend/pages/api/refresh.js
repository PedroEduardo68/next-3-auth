// export default function handler(request, response) {
//     console.log(request.body)
//     response.json({
//         hello:"workd"
//     })
// }

const controllers = {
    async storeRefreshToken(req, res) {
    console.log(req.body)



    response.json({
        hello:"workd"
    })

    }
}


const controllersBy = {
    POST: controllers.storeRefreshToken
}



export default function handler(request, response) {
    if(controllersBy[request.method]) return controllersBy[request.method](request,response)


    console.log(request.body)
    response.status(404)
}