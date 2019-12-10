import styled from "styled-components";
import PropTypes from "prop-types";
import { FaArrowLeft } from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 9999;
  position: fixed;
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

const BackIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: white;
  padding: 5px;
  border-radius: 50%;
  font-size: 30px;
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }
`;

const Image = styled.div`
  max-width: 1000px;
  min-width: 400px;
  min-height: 600px;
  max-height: 700px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  background-color: gray;
`;

const ImageZoom = ({ imageUrl, setIsZoom }) => {
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
    <Container
      onClick={() => {
        setIsZoom(false);
      }}
    >
      <BackIconContainer>
        <FaArrowLeft />
      </BackIconContainer>
      <Image
        onClick={e => e.stopPropagation()}
        imageUrl={`http://localhost:8000/${imageUrl}`}
        // src={`http://localhost:8000/${image.src}`}
        alt="image"
      />
    </Container>
  );
};

ImageZoom.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  setIsZoom: PropTypes.func.isRequired
};

export default ImageZoom;
