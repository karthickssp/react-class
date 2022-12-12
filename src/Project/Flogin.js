import React, { useState } from 'react'

function Flogin()
{
  const [UserName, setUserName]=useState(''); 
  const[Password, setPassword]=useState(''); 
  const[error, setError]=useState(false); 
  const formHandler=(event)=>{
    event.preventDefault();
  if (UserName!=="admin" && Password.length!=="admin")
  {
    setError(true);
  }
  if (UserName && Password)
  {
    const loginobj={ 
      name:UserName, 
      pwd: Password
    }
    console.log(loginobj); 
    alert(JSON.stringify(loginobj));
 }
}
return( 
<div>
<h3>Login page</h3>
<form onSubmit={formHandler}> 
  UserName:<input type="text" value={UserName} placeholder="username" onChange={e=>setUserName(e.target.value)}/> <br/>
  <div>
    {error&& UserName!=="admin"?
    <label style={{color: 'red'}}>Incorrect Username</label>:""} 
  </div>
  Password:<input type="password" value={Password} placeholder="password" onChange={e=>setPassword(e.target.value)}/><br/>
  <div>
    {error&& Password!=="admin"?
    <label style={{color: 'red' }}>Incorrect Password</label>:""}
  </div>
  <button type="submit">Login</button>
  </form>
</div>
)
}
export default Flogin