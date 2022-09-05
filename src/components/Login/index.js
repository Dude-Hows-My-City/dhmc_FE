import React, { useState } from "react";
import Header from "../Header";
import { postUser } from "../../apiCalls";
import { StyledLogin } from "../styles/Login.styled";
export const Login = ({ setUser, user, setUserName }) => {

const [value, setValue] = useState('')

const log = (e) => {
  e.preventDefault()
  postUser(value)
  .then(data => {
    console.log('datum',data)
    setUser(data.data.id)
    setUserName(data.data.attributes.username)
  })
  .catch(error => console.log('Ah shit here we go again'))
}

  return(
    <StyledLogin>
    <Header />
    {console.log(user)}
    <form className="form-wrapper">
      <div className="user-input-wrap">
        <label htmlFor="username">Username</label>
      <input 
      type="text"
      className="username"
      name="username"
      data-cy="username-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
      />
      </div>
      <div className="login-button">
      <input type="submit" 
      onClick={(e) => log(e)}
      />
      </div>
    </form>
    </StyledLogin>
  )
}



