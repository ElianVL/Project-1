import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent =({category,idx}) => {
    const images =[
        "images/colorcombin-category.jpg", 
        "images/garderob-category.jpg",
        "images/card4-category.jpg",
        "images/card2-category.jpg",
        "images/card5-category.jpg",
    ]


    return (
      <Card  >
      <Card.Img  style={{height: "18rem"}} crossorijin="anonymous" variant="top" src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/ProductListPage">
           <Button variant="primary">צפה בקטגוריה</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
    )
}

export default CategoryCardComponent