import React from 'react'
import TypeFilter from './TypeFilter'
import CategoryFilter from './CategoryFilter'

const FilterBar = ({list, filterList, setFilterList}) => {
  return (
    <div>
        <TypeFilter list={list} filterList={filterList} setFilterList={setFilterList}/>
        <CategoryFilter list={list} filterList={filterList} setFilterList={setFilterList}/>
    </div>
  )
}

export default FilterBar