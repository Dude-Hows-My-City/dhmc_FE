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
  return fetch('https://dude-hows-my-city-be.herokuapp.com/api/v1/favorites')
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

}
// /api/v1/favorites
// json body:
// {
//     "user_id" : 1,
//     "city_id" : 1
// }

// `https://dude-hows-my-city-be.herokuapp.com/api/v1/favorites`
// export const postCity = (id) => {
//   let favCity = {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(reservation)
// }
// }


// export const postCity = (id) => {
//   console.log('ID from api calls', id)
//   let favCity = {
//     method: 'POST',
//     headers: {
//     "user_id" : 1,
//     "city_id" : id
//     },
//     body: JSON.stringify(id)
//   };

//   fetch("https://dude-hows-my-city-be.herokuapp.com/api/v1/favorites", favCity)
//     .then(response => response.json())
//     .catch(error => console.log('error', error));
// }

export const postCity = (id) => {
  console.log('ID from api calls', id)
return fetch(`https://dude-hows-my-city-be.herokuapp.com/api/v1/favorites`, {
  method: 'POST',
  headers:{'Content-Type':'application/json'},
  body: JSON.stringify({
    "user_id" : 1,
    "city_id" : 1
})
})
  .then(res => {
    console.log(res)
   return res.json()
  })
}


// export const postCity = (id) => {
//   return fetch('https://dude-hows-my-city-be.herokuapp.com/api/v1/favorites', {
//   method: 'POST',
//   // body: JSON.stringify({
//   //   "user_id": 1 ,
//   //   "city_id": id,
//   // }),
//   headers: {
//     'Content-type': 'application/json', 
//   }
//   })
//   .then(result => result.json())

// }