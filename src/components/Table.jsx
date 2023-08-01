import React, { useEffect } from 'react'
import JobsList from './JobsList'
import { useState } from 'react'

const Table = ({filterList, active}) => {
  const [currentList, setCurrentList] = useState([])

  const itemsPerPage = 3;
  
  useEffect(() => {
    
    const getActivePageElements = (filterList, active, itemsPerPage) => {
      const startIdx = (active - 1) * itemsPerPage;
      const endIdx = startIdx + itemsPerPage;
      
      console.log(startIdx, endIdx)

      const finalList = filterList.slice(startIdx, endIdx);
      
      setCurrentList(finalList)

      console.log(finalList)
    }
    
    getActivePageElements(filterList, active, itemsPerPage)

  }, [active, filterList])

  return (
    <table className='table-auto w-full'>
        <thead>
        <tr>
            <th className='border px-4 py-2'>Position</th>
            <th className='border px-4 py-2'>Apply Link</th>
            <th className='border px-4 py-2'>Category</th>
            <th className='border px-4 py-2'>Location</th>
            <th className='border px-4 py-2'>Type</th>
            <th className='border px-4 py-2'>Company</th>
        </tr>
        </thead>
        <tbody> 
            {
                currentList.length > 0 && currentList.map((item) => {
                    return <JobsList key={item.jobId} item={item}/>
                })
            }
        </tbody>
    </table>
  )
}

export default Table