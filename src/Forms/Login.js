import React, { useState } from 'react'

function Login() {
    const[UserName, setUserName]= useState('');
    const[Password, setPassword]= useState('');
    const[Error,setError]= useState(false);
    const formHandler=(event)=>
    {
        event.preventDefault();
        if(UserName.length==0 || Password.length==0)
        {
          setError(true);
        }
        if(UserName && Password)
        {
        const loginObj={
            name:UserName,
            pwd:Password
        }
        console.log(loginObj);
        alert(JSON.stringify(loginObj));
      }
        //axios.post(url/obj)
    }
  return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    Username :<input type="text" value={UserName} placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}/><br/>
    <div>
    {Error && UserName.length==0 ?
    <label style={{color:'red'}}>Username is required</label>:""}
    </div>
    Password :<input type="password"  value={Password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <div>
    {Error && Password.length==0 ?
    <label style={{color:'red'}}>Password is required</label>:""}
    </div>
    <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login