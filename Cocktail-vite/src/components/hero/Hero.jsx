import styled from "styled-components";
import Video from "../../../img/video.mp4";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
  video {
    position: relative;
    width: 100vh;
    height: 100vh;
  }
`;

const CategoryList = styled.ul`
  display: flex;
  gap: 40px;
  padding: 0;
  margin-bottom: 50px;
  list-style-type: none;
  position: absolute;
  & li {
    color: white;
    padding: 4px 8px;
    cursor: pointer;
    border-bottom: 1px solid #f7eded;
    transition: all 0.45s;
    &:hover {
      background-color: #d7ab44;
      color: #050402;
    }
  }
`;

const Hero = ({ setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };

  return (
    <HeroWrapper>
      <video playsInline muted autoPlay loop src={Video}></video>
      <CategoryList>
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee</li>
        <li onClick={() => onHandleClick("Other / Unknown")}>Other</li>
      </CategoryList>
    </HeroWrapper>
  );
};

export default Hero;
