import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { authService } from "../src/service/auth/authService"

const useSession = () =>{
    const [ session, setSession] = useState(null)
    const [ loading , setLoading] = useState(true)
    const [ error, setError] = useState(null)


    useEffect(()=>{
        authService.getSession()
        .then((userSession) =>{
            setSession(userSession)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [])
    

    return {
        data: {
            session: session,
        } ,
        error,
        loading,
    }
}

const withSessionHOC = (Component) =>{
    return function Wrapper(props){
        const router = useRouter()

        const session = useSession()
    
        if(!session.loading && session.error) {
            router.push('/?error=401')
        }
    
        const modifiedProps = {
            ...props,
            session: session.data.session,
        }

        return (
            <Component {...modifiedProps} />
        )
    }
}




const AuthpageStatic = (props) =>{



    return(
        <>
            <div>
                <h1> Auth Page Static </h1>
                <pre>
                    {JSON.stringify(props, null, 2)}
                </pre>
            </div>
        </>
    )

}

export default withSessionHOC(AuthpageStatic);