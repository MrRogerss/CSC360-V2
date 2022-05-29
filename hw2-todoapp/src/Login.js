
import React, {useState} from "react";
import { useResource } from "react-request-hook";

export default function Login({dispatch}) {
  const [ username, setUsername ] = useState("")
  const [ loginFailed, setLoginFailed ] = useState(false)
  const [ password, setPassword ] = useState("")

  function handleUsername (evt) { setUsername(evt.target.value) }
  function handlePassword (evt) { setPassword(evt.target.value) }

  const [ user, login ] = useResource((username, password) => ({
    url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
    method: 'get'
    }))
    

  return (
    <form onSubmit={(e) => {e.preventDefault(); dispatch({type: "LOGIN",username})}}>
      <label htmlFor="login-username">Username:</label>
      <input type="text" name="login-username" value={username} onChange={handleUsername}
 id="login-username" />
      <label htmlFor="login-password">Password:</label>
      <input type="password" value={password} onChange={handlePassword} name="login-username" id="login-username" />
      
      <input type="submit" value="Login" disabled={username.length === 0} />
    </form>
  );
}