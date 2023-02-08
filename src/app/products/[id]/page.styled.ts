import styled from "styled-components";
import { styles } from "../../globals";

const DetailWrapper = styled.div`
  padding: ${styles.spaces.xl};
  margin: 0 auto;
  width: 80vw;

  @media (max-width: ${styles.media.md}) {
    width: 100%;
  }
  @media (max-width: ${styles.media.sm}) {
    padding: ${styles.spaces.md};
  }
`;
const DetailContainer = styled.div`
  padding: ${styles.spaces.lg};
  display: flex;
  border: 1px solid ${styles.colors.grey10};
  border-radius: ${styles.borderRadius};
  gap: ${styles.spaces.xl};

  @media (max-width: ${styles.media.sm}) {
    flex-direction: column;
  }
  @media (max-width: ${styles.media.xs}) {
    padding: ${styles.spaces.sm};
  }
  .carousel {
    &-root {
      max-width: 600px;
      @media (max-width: ${styles.media.sm}) {
        max-width: none;
      }
    }
    .slide {
      margin: auto;
    }
    .carousel-status {
      display: none;
    }
  }
  .carousel.carousel-slider .control-arrow {
    height: 40px;
    margin: auto;
    background: rgba(0, 0, 0, 0.2);
  }
`;
const DetailImg = styled.img`
  max-height: 600px;
  max-width: 400px;
  width: auto;
  display: block;

  @media (max-width: ${styles.media.sm}) {
    max-height: 400px;
    max-width: 300px;
  }
`;
const DetailInfoContainer = styled.div`
  .brand {
    color: ${styles.colors.grey100};
  }
  p {
    margin-top: ${styles.spaces.lg};
  }
  h4 {
    font-weight: 400;
    color: ${styles.colors.grey100};
  }
`;
const DetailPrice = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  justify-content: space-between;
  margin: ${styles.spaces.md} 0;
  h5 {
    color: ${styles.colors.green10};
  }
  h3 {
    color: ${styles.colors.orange10};
  }
`;
const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DetailFavButton = styled.button`
  min-width: 52px;
  height: 50px;
  margin: 0 0 0 15px;
  border-radius: ${styles.borderRadius};
  box-shadow: 0 1px 4px #0000000d;
  border: solid 1px #e6e6e6;
  background-color: ${styles.colors.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${styles.media.sm}) {
    min-width: 42px;
    height: 40px;
  }
`;
const DetailFavIcon = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: ${styles.media.sm}) {
    width: 30px;
    height: 30px;
  }
`;
export {
  DetailWrapper,
  DetailContainer,
  DetailImg,
  DetailInfoContainer,
  DetailPrice,
  DetailHeader,
  DetailFavButton,
  DetailFavIcon,
};
