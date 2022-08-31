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