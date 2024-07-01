import React from 'react'

const Login = () => {
  return (
    <>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

    </>
  )
}

export default Login