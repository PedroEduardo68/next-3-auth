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
        data: session,
        error,
        loading,
    }
}



const AuthpageStatic = (props) =>{
    const session = useSession()
    return(
        <>
            <div>
                <h1> Auth Page Static </h1>
                <pre>
                    {JSON.stringify(session, null, 2)}
                </pre>
            </div>
        </>
    )

}

export default AuthpageStatic;