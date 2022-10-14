import {useState} from 'react'
import {useRouter} from 'next/router'
import { authService } from '../src/service/auth/authService';

export default function HomeScreen() {
  const router = useRouter();
  const  [values, setValues] = useState({
    usuario: 'pcamera',
    senha: 'pedro'
  })

  const handleChange =(event) =>{
    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    setValues((currentValue) =>{
      return {
        ...currentValue,
        [fieldName]: fieldValue,
      }
    })

  }


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => {
        e.preventDefault();


        authService.login({
          username: values.usuario,
          password: values.senha
        }).then(()=>{
          router.push('/auth-page-static')
          // router.push('/auth-page-ssr')
        }).catch(() =>{
          alert('User invalid')
        });


      }}>
        <input
          placeholder="Usuário" name="usuario"
          value={values.usuario}
          onChange={handleChange}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          value={values.senha}
          onChange={handleChange}
        />
        <div>
          <button>
            Entrar
          </button>
        </div>
{/* 
        <pre>{JSON.stringify(values,null,2)}</pre> */}
      </form>
    </div>
  );
}
