import { withSession } from '../src/service/auth/session';

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


export const getServerSideProps = withSession((ctx) => {
    return {
      props: {
        session: ctx.req.session,
      }
    }
  })
  

    // Decorator Pattern

// export const getServerSideProps = async(ctx) =>{








//     try{
//         const session = await authService.getSession(ctx)
//         return {
//             props:{
//                 session,
//             },
//         }
//     }catch(err) {
//         return{
//             redirect:{
//                 permanent:false,
//                 destination: '/?error=401'
//             }
//         }
//     }

// }