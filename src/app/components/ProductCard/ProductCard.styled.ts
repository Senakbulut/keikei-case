import styled from "styled-components";
import { styles } from "../../globals";

const CardWrapper = styled.div`
  border: 1px solid ${styles.colors.grey10};
  border-radius: ${styles.borderRadius};
  padding: ${styles.spaces.md};
  &:hover {
    box-shadow: 0 2px 10px 1px rgb(0 0 0 / 0.07);
    cursor: pointer;
  }
  @media (max-width: ${styles.media.sm}) {
    padding: ${styles.spaces.sm};
  }
`;
const CardImgWrapper = styled.div`
  width: 100%;
  max-width: 230px;
  height: 240px;
  margin: 0 auto ${styles.spaces.sm} auto;
  overflow: hidden;
  border-radius: ${styles.borderRadius};
`;
const CardImg = styled.img`
  max-height: 240px;
  margin: 0 auto;
  width: auto;
  display: block;
  border-radius: ${styles.borderRadius};
`;
const CardPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${styles.spaces.sm};
  h4 {
    color: ${styles.colors.green10};
  }
  h3 {
    color: ${styles.colors.orange10};
  }
`;
export { CardWrapper, CardImg, CardPrice, CardImgWrapper };
