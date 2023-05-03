import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../actions/userActions'


function Register() {


  const [uname, setUname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  const dispatch = useDispatch()

  const registeration = () => {
    if (password != cpassword) {
      alert("Passwords do not match")
    } else if (uname == "" || email == "" || password == "" || cpassword == "") {
      alert("please fill the required columns")
    } else {
      const user = {
        uname,
        email,
        password,
        cpassword
      }
      // console.log(user);
      dispatch(registerUser(user))
      alert("Registration Successful, Please Login")
      window.location.href = '/login'
    }

  }

  return (
    <div className='w-25 bg-light p-5 mx-auto mt-5 border rounded text-center justify-content-center'>
      <h2>Register</h2>
      <form>
        <input required type='text' className='form-control mt-2' placeholder='Username' value={uname} onChange={e => { setUname(e.target.value) }}></input>
        <input required type='email' className='form-control mt-2' placeholder='Email' value={email} onChange={e => { setEmail(e.target.value) }}></input>
        <input required type='password' className='form-control mt-2' placeholder='Password' value={password} onChange={e => { setPassword(e.target.value) }}></input>
        <input required type='password' className='form-control mt-2' placeholder='Confirm Password' value={cpassword} onChange={e => { setCPassword(e.target.value) }}></input>
        <h6 className='mt-3'>Already have an account? <a href='/login'>Login</a></h6>
        <button className='btn btn-primary mt-3' type='button' onClick={registeration}>Register</button>
      </form>
    </div>
  )
}

export default Register