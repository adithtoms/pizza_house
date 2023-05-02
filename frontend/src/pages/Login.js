import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }
  }, [])

  const handlelogin = () => {
    const user = {email,password}
    console.log(user);
    dispatch(loginUser(user))
  }


  return (
    <div className='w-25 bg-light p-5 mx-auto mt-5 border rounded text-center justify-content-center'>
      <h2>Login</h2>
      <form>
        <input required type='email' className='form-control mt-2' placeholder='Email' value={email} onChange={(e) =>  setEmail(e.target.value) }></input>
        <input required type='password' className='form-control mt-2' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value) } ></input>
        
        <h6 className='mt-3'>Don't have an account? <a href='/register'>Create</a></h6>
        <button className='btn btn-primary mt-3' type='button' onClick={handlelogin}>Login</button>
      </form>
    </div>
  )
}

export default Login