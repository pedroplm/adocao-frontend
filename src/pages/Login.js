import React, {useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {

  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () =>{
    const url = "http://localhost:3001/users/login";
    const data = {username:username,password:password};
    axios.post(url, data).then((response)=>{
      if (response.data.error) {
        alert(response.data.error);
      } else {
          history.push("/home");
          sessionStorage.setItem("accessToken", response.data);
          alert("Logado com sucesso!")
          
        }
    })
    
  }

  return (
    <div className='form__container'>
      <h2 className = 'subtitle'>Login</h2>
      <label>Username:</label>
      <input className='form__container-input' type="text" onChange={e => setUsername(e.target.value)} placehodler = "Seu username"/>
      <label>Senha:</label>
      <input className='form__container-input' type="password" onChange={e => setPassword(e.target.value)} placehodler = "Sua senha"/>
      <p className = "link" onClick = {()=>{history.push("/registration")}}>Não possui uma conta ainda? Clique aqui</p>
      <button onClick = {login} className='btn btn-black'>Login</button>
    </div>
  )
}

export default Login