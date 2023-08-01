import { useEffect, useState } from "react"
import Table from "./components/Table.jsx"
import FilterBar from "./components/FilterBar.jsx"
import PaginationBasic from "./components/Pagenation.jsx"

function App() {
  const [list, setList] = useState([])
  const [filterList, setFilterList] = useState([])
  const [active, setActive] = useState(1)

  useEffect(() => {
    async function getEntireList() {
      const data = await fetch("https://entryleveljobs.me/api/jobs")
      const jsonData = await data.json()
      console.log(jsonData.data)
    
      setList(jsonData.data) 
      setFilterList(jsonData.data)
    }

    getEntireList()
  }, [])

  return (
    <div className="container-fluid h-100">

      <div className="row h-100">
        <div className="col-3 bg-light">
          <FilterBar list={list} filterList={filterList} setFilterList={setFilterList} />
        </div>
    
        <div className="col-9">
          <Table filterList={filterList} active = {active} />
          <PaginationBasic active={active} setActive={setActive} length={filterList.length} />
        </div>
      
      </div>
    
    </div>
  )
}

export default App;