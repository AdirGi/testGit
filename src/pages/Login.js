import React from 'react'
import axios from 'axios'


const Login = () => {
  const Login = async () => {

    const username_el = document.querySelector('#userNameLogIn')
    const password_el = document.querySelector('#pwdLogIn')

    let res = await axios.post("http://127.0.0.1:8000/login/", {
      username: username_el.value,
      password: password_el.value
      //username: "adir",
      //password: '1234'
    })
    console.log(res.data)
    localStorage.setItem('token', res.data.access)
  }
  return (
    <div>
      <h2>log in </h2>
      user name : <input id="userNameLogIn" />
      password : <input id="pwdLogIn" type="password" />
      <button onClick={() => Login()}>log in</button>
      <hr></hr>
     
    </div>
  )
}

export default Login