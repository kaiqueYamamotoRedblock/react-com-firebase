// eslint-disable-next-line
import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className="login-content">
    <main className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal text-white fw-bold text-center">Login</h1>
          
          <input type="email" id="inputEmail" className="form-control my-2" placeholder="Email address" autofocus />
          <input type="password" id="inputPassword" className="form-control my-2" placeholder="Password" />
          
          <button className="w-100 btn btn-lg btn-login" type="submit">Sign in</button>

          <div className="msg-login text-white text-center my-5">
            <span><strong>Wow! </strong> Você está conectado &#128526;</span>
            <span><strong>Ops! </strong> Verifique se a Senha ou Usuario está correto &#128546;</span>
          </div>

          <div className="opcoes-login mt-5 text-center">
            <a href="https://google.com" className="mx-2">Recuperar Senha</a>
            <span className="text-white">&#9733;</span>
            <a href="https://google.com" className="mx-2">Quero Cadastrar</a>
          </div>

        </form>
        </main>
    </div>
  )
}

export default Login