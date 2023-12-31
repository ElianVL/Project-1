import { Pagination } from "react-bootstrap";

const PaginationComponent = () => {
  return (
    <Pagination>
      <Pagination.Prev />
      {/* <Pagination.Item>{1}</Pagination.Item> */}
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
    
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>

      <Pagination.Item>{6}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
};

export default PaginationComponent;
