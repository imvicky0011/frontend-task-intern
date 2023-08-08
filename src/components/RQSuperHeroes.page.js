import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  //react query abstract away the managing of the state variables
  const {isLoading, data, isError, isFetching, error} = useQuery('super-heroes', 
  fetchSuperHeroes,
  {
    staleTime: 10000,
    cacheTime: 2000
  }
  )

  console.log({isLoading, isFetching})

  if(isLoading) {
    return <div> Loading... </div>
  }

  if(isError) {
    return <div> {error.message} </div>
  }

  return (
    <>
    <div>RQSuperHeroesPage</div>

    {data?.data.map(hero => {
      return <div key={hero.name}> {hero.name} </div>
    })}
    
    </>
  )
}