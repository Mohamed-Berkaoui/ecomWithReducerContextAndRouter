import { Carousel } from "react-bootstrap";

function Home_Carousel() {
  return (
    <div style={{position:"relative" ,padding:"20px"}}>
      <Carousel  style={{height:"70vh" }}>
        <Carousel.Item style={{height:"70vh" }}>
          <img src="https://picsum.photos/200" width={"100%"} height={"100%"} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"70vh" }}>
          <img src="https://picsum.photos/200" width={"100%"} height={"100%"} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"70vh" }}>
          <img src="https://picsum.photos/200" width={"100%"} height={"100%"}  alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home_Carousel;
