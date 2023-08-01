import Pagination from 'react-bootstrap/Pagination';


const paginationBasic = ({active, setActive, length}) => {
    let items = [];
    for (let number = 1; number <= Math.ceil(length / 3); number++) {
      items.push(
        <Pagination.Item key={number} active={number === active} onClick={() => {setActive(number)}}>
          {number}
        </Pagination.Item>,
      );
    }

    return (
      <div>
        <Pagination>{items}</Pagination>
      </div>
    )
}

export default paginationBasic
