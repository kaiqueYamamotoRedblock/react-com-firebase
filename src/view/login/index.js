// eslint-disable-next-line
import React, { useState} from 'react'
import './login.css'

import firebase from '../../config/firebase'
import 'firebase/auth'

const Login = () => {

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [msgTipo, setMsgTipo] = useState()

  function logar() {
    firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .then(result => {
        setMsgTipo('sucesso')
      })
      .catch(err => {
        setMsgTipo('erro')
      })
  }

  return (
    <div className="login-content">
    <main className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal text-white fw-bold text-center">Login</h1>
          <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email address" autofocus />
          <input onChange={(e) => setSenha(e.target.value)}type="password" id="inputPassword" className="form-control my-2" placeholder="Password" />
          
          <button onClick={logar} className="w-100 btn btn-lg btn-login" type="button">Logar</button>

          <div className="msg-login text-white text-center my-5">
            {msgTipo === 'sucesso' && <span><strong>Wow! </strong> Você está conectado &#128526;</span>}
            {msgTipo === 'erro' && <span><strong>Ops! </strong> Verifique se a Senha ou Usuario está correto &#128546;</span>}
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