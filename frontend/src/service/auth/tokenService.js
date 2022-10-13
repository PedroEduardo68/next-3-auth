const ACESS_TOKEN_KEY = 'sdgfdgjmfdpgjffodgpdpgdpgdfkf'


export const tokenService = {
    save(acessToken) {
        localStorage.setItem(ACESS_TOKEN_KEY, acessToken)
        sessionStorage.setItem(ACESS_TOKEN_KEY, acessToken)
    }, 
    get(){
        return sessionStorage.getItem(ACESS_TOKEN_KEY)
    },
    delete(){
        localStorage.removeItem(ACESS_TOKEN_KEY)
        sessionStorage.removeItem(ACESS_TOKEN_KEY)
    }
}