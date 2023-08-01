import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const TypeFilter = ({list, filterList, setFilterList}) => {
  
  const [typeList, setTypeList] = useState([])
  const [selectType, setSelectedType] = useState(''); // State to store the selected category

  useEffect(() => {
    async function getTypeList() {
        const typeRespone = await fetch("https://entryleveljobs.me/api/jobs/type")
        const typeList2 = await typeRespone.json()
        
        setTypeList(typeList2.data)
    }

    getTypeList()

  }, [])

  useEffect(() => {
    
    const handleCategorySelect = (category) => {
      setSelectedType(category);
      // Filter the items based on the selected category
      const filterList2 = list.filter((item) => item.type.name === category)
      
      console.log("from the type filter comp")
      console.log(filterList2)

      setFilterList(filterList2)
    }

    if(selectType !== '') {
        handleCategorySelect(selectType)
    }

  }, [selectType])

  

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <h9>Select Type(One at a time)</h9>
          <ListGroup>
            {typeList.map((item) => (
              <ListGroup.Item
                key={item.typeId}
                action
                onClick={() => setSelectedType(item.name)}
                active={item.name === selectType}
              >
                {item.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TypeFilter;
