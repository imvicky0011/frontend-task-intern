import React from 'react'

const JobsList = ({item}) => {
    
    return (
        <tr>
          <td className="border px-4 py-2">{item.position}</td>
          <td className="border px-4 py-2">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Apply Here
                </a>
          </td>
          <td className="border px-4 py-2">
            {item.category?.name}
          </td>
    
          <td className="border px-4 py-2">
            {item.location}
          </td>
          
          <td className="border px-4 py-2">
            {item.type.name}
          </td>
    
          <td className="border px-4 py-2">
            {item.companyName}
          </td>
        </tr>
      )
}

export default JobsList