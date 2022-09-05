import React, { useState } from "react";
import Header from "../Header";
import { postUser } from "../../apiCalls";
export const Login = ({ setUser, user }) => {

const [value, setValue] = useState('')

const log = (e) => {
  e.preventDefault()
  postUser(value)
  .then(data => {
    console.log('datum',data.data.id)
    setUser(data.data.id)
  })
  .catch(error => console.log('Ah shit here we go again'))
}

  return(
    <>
    <Header />
    {console.log(user)}
    <form>
      <div className="user-input-wrap">
        <label htmlFor="username">Username</label>
      <input 
      type="text"
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
    </>
  )
}



