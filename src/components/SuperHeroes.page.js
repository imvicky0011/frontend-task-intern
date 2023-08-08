import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const SuperHeroesPage = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then(data => {
    
      setData(data.data) ;
      setIsLoading(false)
    
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
      setError(true)
    
    })
  }, [])

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Could not fetch the list, some error occured</div>
  }

  return (
    <div>

      <div>SuperHeroesPage</div>
      {
        data.map((hero) => {
          return <div key={hero.name}> {hero.name} </div>
        })
      }
    </div>
  )
}
