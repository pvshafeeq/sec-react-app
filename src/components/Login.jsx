import React from 'react'

const Login = () => {
  return (
    // <div>
    //     Login
        
    //     </div>
   
    <div className="row">
        <div className='col-md-4'></div>
    <form className='col-md-3 loginForm justify-content-center'>
    <h4 className='head'>Log In</h4>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className='head'><button type="submit" class="btn btn-primary">Login</button></div>
  
</form>
<div className='col-md-4'></div>
</div>
  

    
  )
}

export default Login