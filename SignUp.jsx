import React, {useState} from 'react';

const SignUp = () => {
  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")

  function signUp()
  {
     let item={name,email,password}
     console.log(item)
  }
   

return (
    <>
    <div className='signup-box'>
      <form>
      <h1>Sign Up</h1>
      <br></br>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='Enter Your Name' />
      <br></br>
      <br></br>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='email' />
      <br></br>
      <br></br>
      <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='password' />
      <br>
      </br>
      <br></br>
      <button onClick={signUp} className='btn btn-primary'>Sign Up</button>
      </form>



    </div>
   
   
    </>

)
}
export default SignUp;