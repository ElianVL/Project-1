import { Carousel } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"


const ProductCarouselComponent =() => {
    const cursorP ={
      cursor: "pointer"
    }

   return(
    <Carousel>
      <Carousel.Item>
        <img
          crossogin="anonymous"
          className="d-block w-100 "
          style={{height: "400px", objectFit: " cover"}}
          src="/images/Carousel/Carousel1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer  style={cursorP} to="/ProductDetailsPage">
          <h3>שירותי הסטיילינג המתקדמים והיחודיים לכל אחד</h3>
          </LinkContainer>
          <p>תתחילו להרגיש הורמוניה בארון שלכם</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossogin="anonymous"
          className="d-block w-100 "
          style={{height: "400px", objectFit: " cover"}}
          src="/images/Carousel/R.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer  style={cursorP} to="/ProductDetailsPage">
          <h3>הפתרון היחודי שיבדיל אותך</h3>
          </LinkContainer>
          <p>הגיע הזמן לבלוט מעל כולם</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossogin="anonymous"
          className="d-block w-100 "
          style={{height: "400px", objectFit: " cover"}}
          src="/images/Carousel/carousels-category.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer  style={cursorP} to="/ProductDetailsPage">
          <h3>להיפטר מדברים שכבר מזמן רצית להיפטר מהם</h3>
          </LinkContainer>
          <p>
            הארון מלא אבל אין מה ללבוש
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   )
}

export default ProductCarouselComponent