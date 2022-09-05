export const getCities = () => {
  return fetch('https://dude-hows-my-city-be.herokuapp.com/api/v1/cities/')
    .then(res => {
      if(!res.ok) {
        throw new Error()
      }
      return res.json()
    })
}

export const getCity = (id) => {
  return fetch(`https://dude-hows-my-city-be.herokuapp.com/api/v1/cities/${id}`)
  .then(res => {
    if(!res.ok) {
      throw new Error()
    }
    return res.json()
  })

}















































export const postUser = (username) => {
  console.log('user',username)
return fetch(`https://dude-hows-my-city-be.herokuapp.com/api/v1/users?username=${username}`, {
  method: 'POST',
  headers:{'Content-Type':'application/json'}
})
  .then(res => {
    console.log(res)
   return res.json()
  })

}