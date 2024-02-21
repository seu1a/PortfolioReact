import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  background-color: white;
`;

export const VerticalAlignedContainer = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
`;

export const ArrowDownBottom = styled.div`
  position: absolute;

  width: 54.5px;
  height: 30px;

  left: 50%;
  bottom: 25px;

  background-image: url("./images/arrow.png");
  background-size: cover;
`;
