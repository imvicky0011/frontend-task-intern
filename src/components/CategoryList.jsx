import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const CategoryFilter = ({ list, filterList, setFilterList }) => {
  const [typeList, setTypeList] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]); // State to store the selected types

  useEffect(() => {
    async function getTypeList() {
      const typeResponse = await fetch("https://entryleveljobs.me/api/jobs/type");
      const typeList2 = await typeResponse.json();
      setTypeList(typeList2.data);
    }

    getTypeList();
  }, []);

  useEffect(() => {
    if (selectedTypes.length > 0) {
      // Filter the items based on the selected types
      const filteredList = list.filter((item) => selectedTypes.includes(item.type.name));
      setFilterList(filteredList);
    } else {
      // If no types are selected, show all items
      setFilterList(list);
    }
  }, [selectedTypes, list, setFilterList]);

  // Handler for category selection
  const handleCategorySelect = (category) => {
    // Toggle selection for the category
    setSelectedTypes((prevSelectedTypes) => {
      if (prevSelectedTypes.includes(category)) {
        return prevSelectedTypes.filter((type) => type !== category);
      } else {
        return [...prevSelectedTypes, category];
      }
    });
  };

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <h9>Select Type (Multiple choices allowed)</h9>
          <ListGroup>
            {typeList.map((item) => (
              <ListGroup.Item
                key={item.typeId}
                action
                onClick={() => handleCategorySelect(item.name)}
                active={selectedTypes.includes(item.name)}
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

export default CategoryFilter
