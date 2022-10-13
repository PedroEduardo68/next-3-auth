import { tokenService } from "../src/service/auth/tokenService";
import nookies from "nookies"

const AuthpageSSR = (props) =>{
    return(
        <>
            <div>
                <h1> Auth Page SSR </h1>
                <pre>
                    {JSON.stringify(props, null, 2)}
                </pre>
            </div>
        </>
    )

}


export default AuthpageSSR;


export const getServerSideProps = async(ctx) =>{
    console.log(tokenService.get())
    const cookies = nookies.get(ctx)
    console.log("cookies",cookies )


    return {
        props:{
            token: tokenService.get(ctx)
        }
    }
}