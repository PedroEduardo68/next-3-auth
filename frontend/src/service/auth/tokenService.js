import nookies from 'nookies'


const ACESS_TOKEN_KEY = 'sdgfdgjmfdpgjffodgpdpgdpgdfkf'


const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60
const ONE_HOUR = ONE_MINUTE * 60
const ONE_DAY = ONE_HOUR * 24
const ONE_YEAR = ONE_DAY * 365

export const tokenService = {
    save(acessToken, ctx = null) {
        globalThis?.localStorage?.setItem(ACESS_TOKEN_KEY, acessToken)
        globalThis?.sessionStorage?.setItem(ACESS_TOKEN_KEY, acessToken)
        nookies.set(ctx, ACESS_TOKEN_KEY, acessToken, {
            maxAge: ONE_YEAR,
            path: '/',
        })
    }, 
    get(ctx = null){
        const cookies  = nookies.get(ctx);
        return cookies[ACESS_TOKEN_KEY] || ''
        // return globalThis?.sessionStorage?.getItem(ACESS_TOKEN_KEY)
    },
    delete(){
        globalThis?.localStorage?.removeItem(ACESS_TOKEN_KEY)
        globalThis?.sessionStorage?.removeItem(ACESS_TOKEN_KEY)
    }
}