export const getCities = () => {
  return fetch('https://dude-hows-my-city-be.herokuapp.com/api/v1/cities/')
    .then(res => {
      if(!res.ok) {
        throw new Error()
      }
      return res.json()
    })
  // .then(data => console.log(data))
}


export const getFavorites = () => {
  return fetch('https://dude-hows-my-city-be.herokuapp.com/api/v1/favorites/1')
    .then(res => {
      if(!res.ok) {
        throw new Error()
      }
      return res.json()
    })
  // .then(data => console.log(data))
}



export const getCity = (id) => {
  return fetch(`https://dude-hows-my-city-be.herokuapp.com/api/v1/cities/${id}`)
  .then(res => {
    if(!res.ok) {
      throw new Error()
    }
    return res.json()
  })
  .then(data => console.log(data))

}

export const postCity = (id) => {
  console.log('ID from api calls', id)
return fetch(`https://dude-hows-my-city-be.herokuapp.com/api/v1/favorites`, {
  method: 'POST',
  headers:{'Content-Type':'application/json'},
  body: JSON.stringify({
    user_id : 1,
    city_id : id
})
})
  .then(res => {
    console.log(res)
   return res.json()
  })
}



export const deleteFavorite = (id) => {
  console.log('ID from api calls', id)
return fetch(`https://dude-hows-my-city-be.herokuapp.com/api/v1/favorites/1`, {
  method: 'DELETE',
  headers:{'Content-Type':'application/json'},
  body: JSON.stringify({
    "user_id" : 1,
    "city_id" : id
})
})
  .then(res => {
    console.log(res)
   return res.json()
  })
}

