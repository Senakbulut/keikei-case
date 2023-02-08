import styled from "styled-components";
import { styles } from "./globals";

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: ${styles.spaces.xl};
  grid-gap: ${styles.spaces.lg};
  a {
    text-decoration: none;
    color: unset;
  }
  @media (max-width: ${styles.media.lg}) {
    grid-gap: ${styles.spaces.md};
    padding: ${styles.spaces.xl} ${styles.spaces.lg};
  }
  @media (max-width: ${styles.media.md}) {
    grid-template-columns: repeat(2, 1fr);
    padding: ${styles.spaces.xl} ${styles.spaces.md};
  }
  @media (max-width: ${styles.media.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export { HomeWrapper };
