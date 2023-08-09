import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
const deleteHandler = () => {
    if(window.confirm("Are you sure?")) alert("Product deleted!")
}
const AdminProductsPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>
          רשימת מוצרים{" "}
          <LinkContainer to="/admin/AdminCreateProductPage">
            <Button variant="primary" size="lg">
              יצירת חדש
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>שם השירות</th>
              <th>מחיר</th>
              <th>קטגוריה</th>
              <th>מחק/ערוך</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "שירות סטיילינג אישי", price: "$250", category: "סטיילינג אישי" },
              { name: "ליווי בקניה", price: "$1000", category: "ליווי בקניה" },
              { name: "חלוקת ארון", price: "$345", category: "סידור ארון" },
            ].map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer to="/admin/AdminEditProductPage">
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button variant="danger" className="btn-sm" onClick={deleteHandler}>
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminProductsPage;

