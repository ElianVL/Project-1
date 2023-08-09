import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant="secondary"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>המוצר נוסף לסל הקניות שלך</Alert.Heading>
      <p>
        <Button variant="outline-danger">חזור</Button>{" "}
        <Link to="/CartPage">
          <Button variant="outline-dark">לסל קניות</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
