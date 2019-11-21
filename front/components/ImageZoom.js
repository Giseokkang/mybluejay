import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 9999;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 80%;
  background-color: gray;
`;

const Image = styled.div`
  max-width: 1000px;
  height: 700px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
`;

const ImageZoom = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    lazyLoad: false
  };
  return (
    <Container>
      <Slider
        {...settings}
        style={{
          maxWidth: "400px",
          width: "100%"
        }}
      >
        {images.map(image => (
          <div key={image.src}>
            <Image
              imageUrl={`http://localhost:8000/${image.src}`}
              // src={`http://localhost:8000/${image.src}`}
              alt="image"
              key={image.src}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ImageZoom;
